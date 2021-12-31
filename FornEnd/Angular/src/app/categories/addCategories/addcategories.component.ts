import { Component, OnInit } from '@angular/core';
import { AddcategoriesService } from 'src/app/Services/addcategories.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriesComponent implements OnInit {

  isCategoriesAdded: boolean = false;
  categorie :any
  constructor(private MyaddCategorie :AddcategoriesService) { }

  ngOnInit(): void {
    
  }
   addCategorie() {
    
   const body ={
      title: 'new title categorie',
      completed: 'true',
     
    };
// console.log(body);

    this.MyaddCategorie.addCategorie(body).subscribe(data=>{
      console.log("add categorie succesfully");
      this.isCategoriesAdded=true
      console.log(body);
      return this.categorie=data;
    },(err)=>{
      console.log("fail to add categorie"+err);
    })
    
    
  }
}


