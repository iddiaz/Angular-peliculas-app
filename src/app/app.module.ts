import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { appRouting } from './app.routing';

// services
import { PeliculasService } from './services/peliculas.service';

// pipes
import { NotextoPipe } from './pipes/notexto.pipe';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NoFotoPipe } from './pipes/no-foto.pipe';
import { GaleriaComponent } from './components/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaComponent,
    NoFotoPipe,
    NotextoPipe,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    appRouting
  ],
  providers: [ PeliculasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
