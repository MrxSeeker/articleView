import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ComtronAngular';
  menuItems: string[] = ['Domov', 'Artikli', 'Dokumenti'];

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    } else return false;
  }
  logout() {
    localStorage.removeItem('currentUser');
  }

  isHome(item: string) {
    return item === 'Domov';
  }
}
