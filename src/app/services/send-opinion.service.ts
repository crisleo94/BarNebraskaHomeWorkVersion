import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendOpinionService {

  contact: Contact;

  API_URI = 'https://api-bar-nebraska.herokuapp.com/savecontact';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  postOpinion(contact): Observable<Contact> {
    return this.http.post<Contact>(this.API_URI, JSON.stringify(contact), this.httpOptions);
  }

}
