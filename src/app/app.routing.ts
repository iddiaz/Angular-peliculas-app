import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);