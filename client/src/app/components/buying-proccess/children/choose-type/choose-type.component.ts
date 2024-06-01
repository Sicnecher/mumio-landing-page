import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './choose-type.component.html',
  styleUrl: './choose-type.component.css'
})
export class ChooseTypeComponent {
  choice?:string;
  enable?:boolean
  sendRequest(){
    const orderData = {
      product: 'מומיו',
      type: this.choice,
      price: '49.99$'
    }
    sessionStorage.setItem('product', JSON.stringify(orderData))
  }

  setButton(){
    this.enable = true
  }
}
