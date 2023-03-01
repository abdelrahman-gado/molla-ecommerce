import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
categories: Category[]=[]
constructor(private categoryService:CategoryService){}

ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data:any)=>{this.categories=data})
}
}
