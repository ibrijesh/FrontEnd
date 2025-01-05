import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../../Services/product-category.service';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit{

  data: any;
  error : any

  constructor(private productCategorySerivice: ProductCategoryService) {}

  ngOnInit(): void {
   
   this.productCategorySerivice.GetProductCategory().subscribe({
    next : (data) => {
      this.data = data;
    },
    error: (err) => {
      this.error = "its error"
      console.error(err);
    }
   })
    
  }
}
