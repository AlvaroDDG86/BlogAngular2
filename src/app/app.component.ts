import { Component } from '@angular/core';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListaArticuloComponent } from './lista-articulo/lista-articulo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
