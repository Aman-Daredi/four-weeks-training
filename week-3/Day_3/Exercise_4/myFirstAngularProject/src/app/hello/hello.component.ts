import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
    childName: string = "newComponent";
    parentName: string = "hello";
    name: string = 'Aman';
    color: string = "blue";
    colorArray: string[] = ["red", "blue", "green", "orange", "yellow", "violet"];
    changeColor(): void {
      let idx:number = Math.floor(Math.random() * 6);
      this.color = this.colorArray[idx];
    }
}

