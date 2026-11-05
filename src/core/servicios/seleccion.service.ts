import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Seleccion} from '../../shared/entidades/Seleccion';

@Injectable({
  providedIn: 'root',
})
export class SeleccionService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}selecciones`;
  }

  public listar(): Observable<Seleccion[]> {
    return this.http.get<Seleccion[]>(this.url);
  }
  public buscar(indice:number, dato: String): Observable<Seleccion[]> {
    return this.http.get<Seleccion[]>(`${this.url}/${indice}/${dato}`);
  }

  public agregar(seleccion: Seleccion): Observable<Seleccion> {
    return this.http.post<Seleccion>(this.url, seleccion);
  }

  public modificar(seleccion: Seleccion): Observable<Seleccion> {
    return this.http.put<Seleccion>(this.url, seleccion);
  }

  public eliminar(idSeleccion: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${idSeleccion}`);
  }

}
