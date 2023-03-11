import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from 'src/app/interface/category';
import { AuthenticationService } from 'src/app/service/Auth/authentication.service';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css'],
})
export class AdminCategoryEditComponent implements OnInit {
  id: number = 0;
  category: Category = {} as Category;

  updateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.categoryService
      .getCategoryById(this.id)
      .subscribe((data: any) => (this.category = data));
  }

  update() {
    if (this.updateForm.valid) {
      this.auth
        .categoryUpdate(this.updateForm.value, this.id)
        .subscribe((data: any) => console.log(data));
    }
    this.router.navigate(['admin-categories']);
  }
}
