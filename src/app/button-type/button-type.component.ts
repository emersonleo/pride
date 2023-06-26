import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-type',
  templateUrl: './button-type.component.html',
  styleUrls: ['./button-type.component.scss']
})
export class ButtonTypeComponent {
  @Input() text: any;
  @Output() selectedType = new EventEmitter();

  selectType(value: string){
    this.selectedType.emit(value);
  }
}
