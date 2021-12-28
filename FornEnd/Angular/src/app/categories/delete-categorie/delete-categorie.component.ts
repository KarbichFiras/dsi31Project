import { Component, OnInit } from '@angular/core';
import { DeleteCategorieService } from 'src/app/Services/delete-categorie.service';

@Component({
  selector: 'app-delete-categorie',
  templateUrl: './delete-categorie.component.html',
  styleUrls: ['./delete-categorie.component.css']
})
export class DeleteCategorieComponent implements OnInit {
  isCategoriesdeleted : boolean =false;
  constructor(private MydeleteCategorie : DeleteCategorieService) { }

  ngOnInit(): void {
  }
  deleteCategorie(){
  this.MydeleteCategorie.deleteCategorie(1).subscribe(data => {
    this.isCategoriesdeleted=true
  })
  }
}
