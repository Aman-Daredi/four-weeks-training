import { Component } from '@angular/core';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],

  // Here by commenting the below line we are using the same instance of the Service Class that was provided to parent.

  // If we uncomment the below code of providers, then child component will get it's seperate instance of Service class, which sometimes creates unnecessary bugs.

  // providers: [UserDataService]


})
export class ChildComponent {
  constructor(private userService: UserDataService) {

  }

  no1: number =200;
  no2: number = 158;
  no3: number = 469;

  addUser() {
    const user = {name: "saumya", email: "saumya@test.com"};
    this.userService.addUser(user);
  }
}
