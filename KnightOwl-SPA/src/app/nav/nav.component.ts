import { Component, OnInit } from '@angular/core';
import { Module } from '../_models/module';
import { ModuleService } from '../_services/module.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  modules: Module[];

  constructor(private moduleService: ModuleService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadModules();
  }

  loadModules() {
    this.moduleService.getModules().subscribe((modules: Module[]) => {
      this.modules = modules;
    }, error => {
      this.alertify.error(error, 'Failed to Load Modules...');
    });
  }

}
