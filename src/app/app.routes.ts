import { Routes } from '@angular/router';
import {InicioComponente} from '../features/componentes/inicio-componente/inicio-componente';
import {SeleccionComponente} from '../features/componentes/seleccion-componente/seleccion-componente';

export const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "inicio", component: InicioComponente },
  { path: "selecciones", component: SeleccionComponente },
];
