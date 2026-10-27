import { Campeonato } from "./Campeonato";

export interface Grupo {
    id: number;
    campeonato: Campeonato;
    nombre: string;
    paises: string;
}