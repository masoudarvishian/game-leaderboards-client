import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterDto } from 'src/app/models/UserRegisterDto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerModel: UserRegisterDto;
  errorMsg: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.registerModel = new UserRegisterDto();
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.authService.register(this.registerModel).subscribe({
      next: res => {
        if (window.confirm("You are registered, please login to continue...")) {
          this.router.navigate(["/login"]);
        }
      },
      error: err => {
        console.error(err);
        this.errorMsg = err.error;
      }
    });
  }
}
