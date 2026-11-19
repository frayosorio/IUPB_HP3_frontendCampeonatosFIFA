import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Grupo} from '../../shared/entidades/Grupo';
import {Observable} from 'rxjs';
import {TablaPosicionesDto} from '../../shared/entidades/dtos/TablaPosicionesDto';
import {GrupoSeleccion} from '../../shared/entidades/GrupoSeleccion';

@Injectable({
  providedIn: 'root'
})
export class GrupoServicio {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}grupos/`;
  }

  public listarCampeonato(idCampeonato: number): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(`${this.url}campeonato/${idCampeonato}`);
  }

  public agregar(grupo: Grupo): Observable<Grupo> {
    return this.http.post<Grupo>(this.url, grupo);
  }

  public modificar(grupo: Grupo): Observable<Grupo> {
    return this.http.put<Grupo>(this.url, grupo);
  }

  public eliminar(idGrupo: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}${idGrupo}`);
  }

  // ***** Paises del Grupo *****

  public listarSelecciones(idGrupo: number): Observable<GrupoSeleccion[]> {
    return this.http.get<GrupoSeleccion[]>(`${this.url}selecciones/${idGrupo}`);
  }
/*
  public agregarPais(grupoPais: GrupoPais): Observable<GrupoPais> {
    return this.http.post<GrupoPais>(`${this.url}agregarpais`, grupoPais);
  }

  public modificarPais(grupoPais: GrupoPais): Observable<GrupoPais> {
    return this.http.put<GrupoPais>(`${this.url}modificarpais`, grupoPais);
  }

  public eliminarPais(idGrupo: number, idPais: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}eliminarpais/${idGrupo}/${idPais}`);
  }
*/
  // ***** Tabla de Posiciones *****

  public listarTablaPosiciones(idGrupo: number): Observable<TablaPosicionesDto[]> {
    return this.http.get<TablaPosicionesDto[]>(`${this.url}posiciones/${idGrupo}`);
  }

}
