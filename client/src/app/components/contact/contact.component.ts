import { Component, EventEmitter, Input, ViewChild } from '@angular/core';
import { ContactService } from '../../services/http/contact/contact.service';
import { Subscription } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubmitResponseComponent } from './children/submit-response/submit-response.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, SubmitResponseComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  responseOk?:boolean
  subscription?: Subscription
  done: EventEmitter<any> = new EventEmitter();
  @ViewChild(SubmitResponseComponent) responseComponent?:SubmitResponseComponent
  constructor(
    private contactHttpService:ContactService,
    private router:Router
  ) { }

  exit(){
    this.done.emit()
  }

  onSubmit(form:NgForm){
    this.subscription = this.contactHttpService.sendContactForm(form).subscribe({
      next: () => {
        this.responseOk = true
        setTimeout(() => {
          this.done.emit()
        }, 5000)
      },
      error: (error) => {
        if(error.error instanceof ErrorEvent){
          this.responseOk = false
        }
      }
    })
  }
}