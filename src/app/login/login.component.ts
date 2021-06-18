import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  feedback: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  LoginUser(): void {
    if (this.username == 'admin' && this.password == '123') {
      localStorage.setItem('currentUser', JSON.stringify('adminUser'));
      this.router.navigate(['/domov']);
    } else {
      alert('Podatke niso pravilne');
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    } else return false;
  }
}
