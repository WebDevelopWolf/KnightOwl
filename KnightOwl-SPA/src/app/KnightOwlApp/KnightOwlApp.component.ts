import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-KnightOwlApp',
  templateUrl: './KnightOwlApp.component.html',
  styleUrls: ['./KnightOwlApp.component.css']
})
export class KnightOwlAppComponent implements OnInit {
  @Input() userLoggedIn: boolean;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    console.log('Logged Out');
  }

}
