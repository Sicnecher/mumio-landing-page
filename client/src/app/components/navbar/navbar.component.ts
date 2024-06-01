import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(){}
  @Output() navBarEvent: EventEmitter<any> = new EventEmitter();
  action(element:MouseEvent){
    this.navBarEvent.emit(element)
  }
}
