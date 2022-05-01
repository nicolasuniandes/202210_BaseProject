import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../model/planta';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private readonly apiUrl: string = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  getPlantasDisponibles(): Observable<Planta[]> {
    return this._http.get<Planta[]>(this.apiUrl);

  }
}

