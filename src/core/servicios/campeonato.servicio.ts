import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Campeonato} from '../../shared/entidades/Campeonato';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoServicio {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}campeonatos/`;
  }

  public listar(): Observable<Campeonato[]> {
    return this.http.get<Campeonato[]>(this.url);
  }
}
