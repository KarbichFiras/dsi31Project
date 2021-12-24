import { Component, OnInit } from '@angular/core';
import { Users } from '../user/model/user-list';
import { UsersService } from 'src/app/Services/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users : any ;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
   this.getUser();
  }
  getUser(){
    this.users = this.userService.getUsers().subscribe(data => {
      this.users = data;
    });;
  }
}
