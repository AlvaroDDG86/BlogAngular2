import { Component } from '@angular/core';
import { ArticuloComponent } from './articulo/articulo.component';
import { ComunicationService } from './comunication.service';
import { ListaArticuloComponent } from './lista-articulo/lista-articulo.component';
import { Articulo } from './articulo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComunicationService]
})

export class AppComponent {
  constructor(private _service: ComunicationService){
    
  }
  title = 'Let\s Travel!';
}
