import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ModuleService } from '../_services/module.service';
import { AlertifyService } from '../_services/alertify.service';
import { Module } from '../_models/module';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit {
  routeString: string;
  modules: Module[];
  moduleId: number;
  module: Module;

  constructor(private router: Router, private moduleService: ModuleService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getSubNav();
  }

  getSubNav() {
    // Get active url
    this.router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        const splitUrl = events.url.split('/');
        // Force url to be the dash link if empty
        if (splitUrl[1] === '') {
          this.routeString = 'dash';
        } else {
          this.routeString = splitUrl[1];
        }
        // Filter modules
        this.getModules();
        // TODO: Run the KO Service to get the user's dashboards (if on root or dashboard)
        if (this.routeString === 'dash') {
          // Get User Dashboards
        }
      }
    });
  }

  getModule(id: number) {
    this.moduleService.getModule(id).subscribe((module: Module) => {
      this.module = module;
    }, error => {
      this.alertify.error(error, 'Failed to Load This Module...');
    });
  }

  getModules() {
    this.moduleService.getModules().subscribe((modules: Module[]) => {
      this.modules = modules;
    }, error => {
      this.alertify.error(error, 'Failed to Load Modules...');
    }, () => {
      // For every module...
      this.modules.forEach(mod => {
        // If the route matches the module...
        if (mod.routerLink === this.routeString) {
          // Return module
          this.getModule(mod.moduleId);
        }
      });
    });
  }

}
