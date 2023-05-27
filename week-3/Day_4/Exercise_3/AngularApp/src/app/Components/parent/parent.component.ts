import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [UserDataService]
})
export class ParentComponent implements OnInit {
  data: {name:string, email:string}[] = [];
  constructor(private userService: UserDataService) {}

  ngOnInit(): void {
    this.data = this.userService.users;
  }
}
