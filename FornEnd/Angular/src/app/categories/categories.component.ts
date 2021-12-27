import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../Services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories :any
  constructor(private MycategoriesService : CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.MycategoriesService.getAllCategories()
  
  
  }

}
