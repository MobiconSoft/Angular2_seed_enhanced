import { Component, Input } from '@angular/core';

@Component({
    selector: 'tm-icon',
    moduleId: module.id,
    styleUrls: ['./icon.component.css'],
    templateUrl: './icon.component.html'
})

export class IconComponent {
  @Input() isMaterial: boolean;
    @Input() name: string;
}
