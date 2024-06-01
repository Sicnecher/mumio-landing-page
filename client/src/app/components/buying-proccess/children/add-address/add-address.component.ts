import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddComponent{
  constructor() { }

  onSubmit(form:NgForm){
    const addressData = {
      name: form.value.name,
      city: form.value.city,
      street: form.value.street,
      apartment: form.value.apartment,
      postal_code: form.value.postal_code
    }
    sessionStorage.setItem('addressData', JSON.stringify(addressData));
  }
}
