import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-presention',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './presention.component.html',
  styleUrl: './presention.component.css'
})
export class PresentionComponent {
  address?:any;
  productData?:any;
  constructor() { }

}
