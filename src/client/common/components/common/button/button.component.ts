import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'tm-button',
    moduleId: module.id,
    styleUrls: ['./button.component.css'],
    templateUrl: './button.component.html',
    directives: [IconComponent]
})

export class ButtonComponent {
    @Input() icon: string;
    @Input() label: string;
}
