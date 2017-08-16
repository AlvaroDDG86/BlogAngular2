import { Component, OnInit } from '@angular/core';
import { ArticuloComponent } from '../articulo/articulo.component';
import { ComunicationService } from '../comunication.service';
import { ListaArticuloComponent } from '../lista-articulo/lista-articulo.component';
import { Articulo } from '../articulo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ComunicationService]
})
export class InicioComponent implements OnInit {
  public articulo: Articulo;
  constructor(private _service: ComunicationService) { this.articulo = _service.getLastArticulo(); }

  ngOnInit() {
    
  }

}
