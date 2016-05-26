/**
 * This is sample spec for service 
 * @reference https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.sstqz77xa
 */

import { provide } from '@angular/core';
import { 
  describe, it, expect, beforeEach, beforeEachProviders, inject
} from '@angular/core/testing';
import { HTTP_PROVIDERS } from '@angular/http';

import { LanguageHttpService } from './language-http.service';
import { LanguageHttpServiceMock } from './language-http.service.mock';

export function main() {
  describe('LanguageHttpService: service', () => {
    let service: LanguageHttpService;
    
    beforeEachProviders(() => [
      HTTP_PROVIDERS,
      provide(LanguageHttpService, {useClass: LanguageHttpServiceMock})
    ]);
    
    beforeEach(inject([LanguageHttpService], (s: LanguageHttpService) => service = s));
    
    it('should return avaiable languages', (done: any) => {
      service.get().subscribe(x => {
        expect(x).toContain('en');
        expect(x).toContain('kr');
        expect(x.length).toEqual(2);
        done();
      });
    }); 
    
  });
}