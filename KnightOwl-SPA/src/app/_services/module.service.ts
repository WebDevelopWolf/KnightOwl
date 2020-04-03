import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Module } from '../_models/module';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  baseUrl = environment.apiUrl + 'modules/';
  enabledModules: Module[];

constructor(private http: HttpClient) { }

// Get list of modules
getModules(): Observable<Module[]> {
  return this.http.get<Module[]>(this.baseUrl, httpOptions);
}

// Get a single module
getModule(id): Observable<Module> {
  return this.http.get<Module>(this.baseUrl + id, httpOptions);
}

}
