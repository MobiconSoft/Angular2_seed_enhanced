import { 
  describe, it, expect, beforeEach 
} from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

export function main() {
  describe('Observable: basic observbale', () => {
    var basic$: any;
    
    beforeEach(() => {
      basic$ = Observable.create( (observer: any) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
      });
    });
    
    it('should create the expected sequence', (done: any) => {
      let exptected = [1,2,3], index = 0;
      
      basic$.subscribe(
        (x: any) => {
          expect(x).toEqual(exptected[index++])
        },
        (x: any) => console.log(x),
        () => done()
      );
    })
    
  });
}