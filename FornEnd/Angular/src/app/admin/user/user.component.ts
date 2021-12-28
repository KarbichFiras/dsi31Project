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
  addUser(){
   const body = {
    userId: 3,
    id: 4,
    title: "NEw user",
    completed: false
   }
   this.userService.addUser(body).subscribe(data => {
    console.log("add user succesfully");
  });;
  }

  updateUser(){
    const body = {
      userId: 1,
      
      title: "NEw upadated user",
      completed: false
     }
     this.userService.updateUser(body,3).subscribe(data =>{
      console.log("updated user",body);
      });
  }
  deleteUser(){
    this.userService.deleteUser(1).subscribe(data =>{
      console.log("delete user");
      });
  }

}


