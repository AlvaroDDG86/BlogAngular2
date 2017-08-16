import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListaArticuloComponent } from './lista-articulo/lista-articulo.component';
import { MenusocialComponent } from './menusocial/menusocial.component';
import { AboutComponent } from './about/about.component';
import { NuevoArticuloComponent } from './nuevo-articulo/nuevo-articulo.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    ListaArticuloComponent,
    MenusocialComponent,
    AboutComponent,
    NuevoArticuloComponent,
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
