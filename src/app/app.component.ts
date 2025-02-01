import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCategoryComponent } from './Components/product-category/product-category.component';
import { ApiService } from './Services/api.service';
import { UserComponent } from './Components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductCategoryComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  constructor(private api: ApiService){}

  title = 'frontend';

  data : any;
  error : any;

  ngOnInit(): void {
  }

}
