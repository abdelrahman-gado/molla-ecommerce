import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  categories:Category[] = [];

constructor(private categoryService:CategoryService ){}

ngOnInit(): void {
 this.categoryService.getCategories().subscribe((data:any)=>{this.categories = data.data})
  //this.categories = this.categoryService.getCategories()
}
}
