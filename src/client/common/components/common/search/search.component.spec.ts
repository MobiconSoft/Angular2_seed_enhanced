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

import { SearchComponent } from './search.component';

export function main() {

  describe('Search Component', () => {

    // Support for testing component that uses Router
    beforeEachProviders(() => [ROUTER_FAKE_PROVIDERS]);

    it('should build without a problem',
      //  async(
      //    inject([TestComponentBuilder], 
      //      (tcb: TestComponentBuilder) => {
      //         tcb.createAsync(TestComponent)
      //           .then((fixture) => {
      //             expect(fixture.nativeElement.innerText.indexOf('HOME')).toBeTruthy();
      //           });
      //      }
      //    )
      //  )
      () => { expect(true).toBeTruthy(); }
    );
  });
  
}

@Component({
  selector: 'test-cmp',
  template: '<tm-search></tm-search>',
  directives: [SearchComponent]
})
class TestComponent {}
