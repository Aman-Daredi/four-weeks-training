import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  items:string[] = ["toys", "cars", "pizza", "banana", "facewash"];

  removeItem(idx:any) {
    this.items.splice(idx, 1);
  }

}
