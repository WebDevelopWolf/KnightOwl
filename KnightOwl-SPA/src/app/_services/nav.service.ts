import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavLinks } from '../_models/navLinks';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  baseUrl = environment.apiUrl + 'modules/';
  enabledModules: NavLinks[];

constructor(private http: HttpClient) { }

// Get list of modules
getModules(): Observable<NavLinks[]> {
  return this.http.get<NavLinks[]>(this.baseUrl);
}

// Get a single module
getModule(id): Observable<NavLinks> {
  return this.http.get<NavLinks>(this.baseUrl + id);
}

}
