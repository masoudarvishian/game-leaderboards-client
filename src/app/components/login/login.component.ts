import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginDto } from 'src/app/models/UserLoginDto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginModel: UserLoginDto;
  displayError: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginModel = new UserLoginDto();
  }

  ngOnInit() {
    this.displayError = false;
  }

  onSubmit(f: NgForm) {
    this.authService.login(this.loginModel).subscribe({
      next: res => {
        console.log(res);
        localStorage.setItem("token", res.token);

        this.router.navigate(["/"]);
      },
      error: error => {
        console.error(error);
        this.displayError = true;
      }
    });
  }

}
