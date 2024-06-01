import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  sendContactForm(form:NgForm): Observable<null> {
    return this.http.post<null>(`${environment.apiBaseUrl}/contact`, form)
  }
}
