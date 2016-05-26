import { Component, Input } from '@angular/core';

@Component({
    selector: 'tm-input',
    moduleId: module.id,
    styleUrls: ['./input.component.css'],
    templateUrl: './input.component.html'
})

export class InputComponent {
  @Input() type: string;
  @Input() placeholder: string;
}
