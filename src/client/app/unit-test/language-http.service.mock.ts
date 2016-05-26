import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LanguageHttpService } from './language-http.service';

@Injectable()
export class LanguageHttpServiceMock extends LanguageHttpService {
  
  get() {
    return Observable.of(['en', 'kr']);
  }
  
}