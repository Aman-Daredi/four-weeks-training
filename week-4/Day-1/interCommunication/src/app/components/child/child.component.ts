import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() items: string[] = [];
  @Output() removeItem: EventEmitter<any> = new EventEmitter();

  onClick(idx:number) {
    this.removeItem.emit(idx);
  }
}
