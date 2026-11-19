import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Ciudad} from '../../shared/entidades/Ciudad';

@Injectable({
  providedIn: 'root',
})
export class CiudadServicio {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}ciudades`;
  }

  public listar(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.url);
  }
  public buscar(indice:number, dato: String): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${this.url}/${indice}/${dato}`);
  }

  public agregar(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(this.url, ciudad);
  }

  public modificar(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.put<Ciudad>(this.url, ciudad);
  }

  public eliminar(idCiudad: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${idCiudad}`);
  }
}
