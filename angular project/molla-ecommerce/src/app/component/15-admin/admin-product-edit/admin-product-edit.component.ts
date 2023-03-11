import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { AuthenticationService } from 'src/app/service/Auth/authentication.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent {
  id: number = 0;
  product: Product = {} as Product;

  updateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    discount: new FormControl('',[Validators.required]),
    category_id: new FormControl('',[Validators.required]),
    color_id: new FormControl('',[Validators.required]),
    
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.productService
      .getProductsById(this.id)
      .subscribe((data: any) => (this.product = data));
  }

  update() {
    if (this.updateForm.valid) {
      this.auth
        .productUpdate(this.updateForm.value, this.id)
        .subscribe((data: any) => console.log(data));
    }
    this.router.navigate(['admin-products']);
  }
}
