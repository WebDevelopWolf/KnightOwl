import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-KnightOwlApp',
  templateUrl: './KnightOwlApp.component.html',
  styleUrls: ['./KnightOwlApp.component.css']
})
export class KnightOwlAppComponent implements OnInit {
  @Input() userLoggedIn: boolean;
  constructor() { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    console.log('Logged Out');
  }

}
