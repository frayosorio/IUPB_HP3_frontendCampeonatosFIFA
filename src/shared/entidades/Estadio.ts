import {Ciudad} from "./Ciudad";

export interface Estadio {
  id: number;
  nombre: string;
  ciudad: Ciudad;
  idCiudad: number;
  capacidad: number;
}
