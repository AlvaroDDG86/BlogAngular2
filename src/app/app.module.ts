import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListaArticuloComponent } from './lista-articulo/lista-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    ListaArticuloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
