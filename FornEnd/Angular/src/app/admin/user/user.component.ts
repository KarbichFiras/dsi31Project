import { Component, OnInit } from '@angular/core';
import { Users } from '../user/model/user-list';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users = Users ;
  constructor() { }

  ngOnInit(): void {
  }
  getUesrs():typeof Users{
    return this.users;
  }
}
