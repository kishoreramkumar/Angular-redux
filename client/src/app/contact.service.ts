import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
  private _contactsUrl = 'http://localhost:3000/api/contacts';
  
  constructor(private _http: HttpClient) { }

  getContacts() {
    return this._http.get(this._contactsUrl);
  }

  addContact(contact: any) {
    return this._http.post(this._contactsUrl, contact);
  }
  
  deleteContact(id: any) {
    const deleteContactUrl = `${this._contactsUrl}/${id}`;
    return this._http.delete(deleteContactUrl);
  }
}
