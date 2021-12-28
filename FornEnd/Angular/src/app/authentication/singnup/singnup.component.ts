import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import{  SignupService } from '../../Services/Apis/signup.service';
@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent implements OnInit {

  userForm;

  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
      
  }

  signUp(){

    console.log("sign u p method tregered !")
    
    const postBody={
      username : "testUsername",
      email : "testEmail",
      password : "12345"
    }

    this.signupService.addUser(postBody).subscribe(
      (data)=>{
        if(data == null){
          console.log("Failed to sign you up! please try again later");
        }else{
          console.log("Signed up succesfuly");
        }
      },
      (error)=>{
        //ma7abetch tcatchi lerror
        console.log("Failed to sign you up! please try again later");
      }
    );

  }

}
