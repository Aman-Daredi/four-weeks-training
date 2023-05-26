import { Component } from '@angular/core';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // providers: [UserDataService]
})
export class ChildComponent {
  constructor(private userService: UserDataService) {

  }

  addUser() {
    const user = {name: "saumya", email: "saumya@test.com"};
    this.userService.addUser(user);
  }
}
