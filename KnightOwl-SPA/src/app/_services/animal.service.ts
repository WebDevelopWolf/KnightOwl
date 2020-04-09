import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Animal } from '../_models/animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  baseUrl = environment.apiUrl + 'animals/';
  enabledModules: Animal[];

constructor(private http: HttpClient) { }
  // Get list of animals by their classification
  getAnimals(classification: string): Observable<Animal[]> {
  return this.http.get<Animal[]>(this.baseUrl + classification);
}
}
