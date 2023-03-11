import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css'],
})
export class AdminCategoriesComponent implements OnInit {
  categories: Category[] = [];
  id: number = 0;

  constructor(private categoryService: CategoryService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data.data;
    this.route.params.subscribe(params=>this.id=params['id'])
    });
    //this.categories = this.categoryService.getCategories()
  }
}
