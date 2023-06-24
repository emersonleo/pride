import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-type',
  templateUrl: './button-type.component.html',
  styleUrls: ['./button-type.component.scss']
})
export class ButtonTypeComponent {
  @Input() text: string | undefined;
}
