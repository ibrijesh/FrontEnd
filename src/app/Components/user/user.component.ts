import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private loginService: LoginService) { }

  loginUser(): any {

    let userData = {
      "username": "admin",
      "password": "password",
      "role": "user"
    }

    this.loginService.postData(userData).subscribe((response: any) => {

      console.log(response);

      localStorage.setItem('authToken', response['token']);

    }, (error: any) => {
      console.error('Error posting data:', error);
    })
  }

}
