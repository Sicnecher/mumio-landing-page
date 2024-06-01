import { Component, ViewChild, ElementRef } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-root',
  standalone:  true,
  imports: [CommonModule, NavbarComponent, ContactComponent, ProductDetailComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  inCart?:boolean;
  currentSlide:number = 1
  productNumber:any = {
    'shilaJel': 0,
    'shilaCap': 0,
    'mumCap': 0
  }
  @ViewChild('mumCap', {static: false}) mumCapRef?: ElementRef;
  @ViewChild(NavbarComponent) navbarComponent?: NavbarComponent;
  @ViewChild(ContactComponent, { static: false }) contactComponent?: ContactComponent;
  @ViewChild(ProductDetailComponent, { static: false }) productDetailComponent?: ProductDetailComponent;
  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) { }

  add(type:string){
    if(this.productNumber[type] !== 200) this.productNumber[type]++
  }

  remove(type:string){ 
    if(this.productNumber[type] !== 0) this.productNumber[type]--
  }

  handleNavbarEvent(eventData: Event) {
    const t = eventData.target as HTMLElement
    const element = document.getElementById(t.classList[0])
    if(element){
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}

  check(page:any){
    return page.classList.contains('in-cart')
  }
  
  fillDetails(){
    sessionStorage.setItem('cart', JSON.stringify(this.productNumber))
    this.router.navigateByUrl('/cart')
  }
  }