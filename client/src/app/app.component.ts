import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailService } from './services/http/product-detail/product-detail.service';
import { twoMain } from '../assets/static-info/text/main-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    ContactComponent, 
    NavbarComponent, 
    ProductDetailComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  constructor( private producTHttpService: ProductDetailService ) { }
  text:string[] = twoMain
  display?:boolean
  @ViewChild(NavbarComponent) navbarComponent?:NavbarComponent
  @ViewChild(ContactComponent) contactComponent?:ContactComponent
  @ViewChild(ProductDetailComponent) productDetailComponent?:ProductDetailComponent
}
