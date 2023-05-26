import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  users = [
    {name: "aman", email: "aman@test.com"},
    {name: "rahul", email: "rahul@test.com"},
    {name: "vicky", email: "vicky@test.com"},
  ]

  constructor() { }

  addUser(user: {name:string, email: string}):void {
    this.users.push(user);
  }
}
