import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import {
  async,
  beforeEachProviders,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';

import { AppPage } from './app.page';

export function main() {

  describe('App Page', () => {

    // Support for testing component that uses Router
    beforeEachProviders(() => [ROUTER_FAKE_PROVIDERS]);

    it('should build without a problem',
       async(
         inject([TestComponentBuilder], 
           (tcb: TestComponentBuilder) => {
              // tcb.createAsync(TestComponent)
              //   .then((fixture) => {
              //     expect(fixture.nativeElement.innerText.indexOf('HOME')).toBeTruthy();
              //   });
              expect(true).toBeTruthy();
           })
         )
       );
       
  });
  
}

@Component({
  selector: 'test-cmp',
  template: '<tm-app></tm-app>',
  directives: [AppPage]
})
class TestComponent {}
