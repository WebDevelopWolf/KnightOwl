import { Component, OnInit } from '@angular/core';
import { NavLinks } from '../_models/navLinks';
import { NavService } from '../_services/nav.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  modules: NavLinks[];

  constructor(private moduleService: NavService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadModules();
  }

  loadModules() {
    this.moduleService.getModules().subscribe((modules: NavLinks[]) => {
      this.modules = modules;
    }, error => {
      this.alertify.error(error, 'Failed to Load Modules...');
    });
  }

}
