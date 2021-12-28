import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { UpdateCategorieService } from 'src/app/Services/update-categorie.service';
@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {
  isCategoriesAdded :boolean =false;
  categorie :any

  constructor(private MyupdateCategorie : UpdateCategorieService,private Mycategorie :CategoriesService) { }

  ngOnInit(): void {
  }
  updateCategorie(){
    const body ={
      title: 'updated title categorie',
    };
    this.MyupdateCategorie.updateCategorie(body,1).subscribe(data =>{
      console.log(data);
      
      this.isCategoriesAdded  =true;
      return this.categorie=data;
     /* this.Mycategorie.getCategorie().subscribe(dataGet => {
        return this.categorie=dataGet;
      });*/
    })

  }
}
