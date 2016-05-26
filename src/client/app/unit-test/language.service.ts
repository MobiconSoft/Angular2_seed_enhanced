import {Injectable} from '@angular/core';

@Injectable()
export class LanguageService {
  get() {
    return ['en', 'kr'];
  }
}