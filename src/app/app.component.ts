import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCategoryComponent } from './Components/product-category/product-category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
