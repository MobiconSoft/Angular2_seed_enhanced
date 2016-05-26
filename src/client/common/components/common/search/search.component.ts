import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../fields/input/input.component';

@Component({
    selector: 'tm-search',
    moduleId: module.id,
    styleUrls: ['./search.component.css'],
    templateUrl: './search.component.html',
    directives: [ButtonComponent, InputComponent]
})

export class SearchComponent {}
