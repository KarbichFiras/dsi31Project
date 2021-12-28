import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../Services/Apis/signup.service';

@Component({
  selector: 'app-search-f',
  templateUrl: './search-f.component.html',
  styleUrls: ['./search-f.component.css']
})
export class SearchFComponent implements OnInit {


  signupForm;
  username;
  email;
  password;
  acceptedTerms;

  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
    
  }

  signup(form:NgForm){

    const postBody={
      username : form.value.username,
      email : form.value.email,
      password : form.value.password
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
