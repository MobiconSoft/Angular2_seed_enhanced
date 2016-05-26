import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AppService {
  constructor(private http: Http){}

  /**
   * call i18n
   * service from tools/server/stubs/i18n.js
   */
  getStubi18n() {
    console.log('-- appService: calling /api/uimessages');
    return this.http
      .get('/api/uimessages')
      .subscribe( (response: any) => console.log('stub: ', response) );
  }

  getStubGridJson() {
    console.log('-- appService: calling /stubs/grid/manifest.json');
    return this.http
      .get('/stubs/grid/manifest.json')
      .subscribe( (response: any) => console.log('manifest api: ', response) );
  }
}
