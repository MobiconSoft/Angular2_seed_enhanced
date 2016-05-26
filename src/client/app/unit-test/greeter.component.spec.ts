/**
 * This is sample spec for component 
 * @reference https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.sstqz77xa
 */

import { 
  describe, it, expect, beforeEach, beforeEachProviders, inject
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';

import { Greeter } from './greeter.component';

export function main() {
  describe('Greeter: component', () => {
    let tcb: TestComponentBuilder;
    
    //setup
    beforeEachProviders(() => [
      TestComponentBuilder,
      Greeter
    ]);
    
    beforeEach(inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
      tcb = _tcb;
    }));
    
    it('should render `Hi Peter`', (done: any) => {
      tcb.createAsync(Greeter)
        .then( fixture => {
          let greeter = fixture.componentInstance,
              element = fixture.nativeElement;
          greeter.name = 'Peter';
          fixture.detectChanges();
          expect(element.querySelector('h1').innerText).toBe('Hi Peter');
          done();
        })
        .catch( e => done.fail(e));
    });
    
  });
}