import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LanguageHttpService {
  constructor(private http: Http) {}
  
  get() {
    return this.http.get('./languages.json')
      .map( response => response.json());
  }
}