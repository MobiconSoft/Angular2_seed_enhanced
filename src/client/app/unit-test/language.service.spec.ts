/**
 * This is sample spec for service 
 * @reference https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.sstqz77xa
 */

import { 
  describe, it, expect, beforeEach, beforeEachProviders, inject
} from '@angular/core/testing';

import { LanguageService } from './language.service';

export function main() {
  describe('LanguageService: service', () => {
    let service: LanguageService;
    
    beforeEachProviders(() => [
      LanguageService
    ]);
    
    beforeEach(inject([LanguageService], (s: LanguageService) => service = s));
    
    it('should return avaiable languages', () => {
      let languages = service.get();
      expect(languages).toContain('en');
      expect(languages).toContain('kr');
      expect(languages.length).toEqual(2);
    });
    
  });
}