import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../../Services/product-category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [CommonModule],
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
      console.log(this.data);
      
    },
    error: (err) => {
      this.error = "its error"
      console.error(err);
    }
   })
    
  }
}
