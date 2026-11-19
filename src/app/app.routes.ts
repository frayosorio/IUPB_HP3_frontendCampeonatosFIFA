import { Routes } from '@angular/router';
import {InicioComponente} from '../features/componentes/inicio-componente/inicio-componente';
import {SeleccionComponente} from '../features/componentes/seleccion-componente/seleccion-componente';
import {CiudadComponente} from '../features/componentes/ciudad-componente/ciudad-componente';
import {GrupoComponente} from '../features/componentes/grupo-componente/grupo-componente';

export const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "inicio", component: InicioComponente },
  { path: "selecciones", component: SeleccionComponente },
  { path: "ciudades", component: CiudadComponente },
  { path: "grupos", component: GrupoComponente },
];
