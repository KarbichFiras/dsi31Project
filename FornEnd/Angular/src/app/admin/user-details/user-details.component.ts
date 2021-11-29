import { Component, OnInit } from '@angular/core';
import { User } from '../user/model/user-model'; 
import { ActivatedRoute } from '@angular/router';
import { Users } from '../user/model/user-list';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userid : String='';
  users = Users;
  user : User ={
    id :'' ,
    nom : '',
    prenom :'' ,
    date_naissance :'',
    adresse :'',
    tel : '',
  };

  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.userid = params.id;
      //console.log(this.restaurantCode);
    })
    this.getUser(this.userid);
}
  
getUser(userid: String){
  let userIndex = this.fetchUser(userid);
 
  this.user = this.users[userIndex];

}

fetchUser(userid : String):number{
let userIndex :number = -1;

this.users.forEach(function(u,index){
  if(u.id === userid){
    userIndex = index;
  }
});

return userIndex;
}
}
