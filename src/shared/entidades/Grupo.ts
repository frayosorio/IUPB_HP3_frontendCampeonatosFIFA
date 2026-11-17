import {Campeonato} from "./Campeonato";

export interface Grupo {
  id: number;
  campeonato: Campeonato;
  idCampeonato: number;
  nombre: string;
  paises: string;
}
