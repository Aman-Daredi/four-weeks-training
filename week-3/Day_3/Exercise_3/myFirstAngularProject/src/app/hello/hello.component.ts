import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
    name = 'Aman';
    color = "blue";
    default = "lightgray";
    clicked = false;

    click() {
      this.clicked = !this.clicked;
    }
}
