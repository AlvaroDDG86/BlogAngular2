import { Component, OnInit, EventEmitter } from '@angular/core';
import { ComunicationService } from '../comunication.service';
import { Articulo } from '../articulo';

 

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css'],
  providers: [ComunicationService],
  outputs: ['articuloChanged']
})

export class ListaArticuloComponent implements OnInit {
  public articulos: Articulo[];
  articuloChanged = new EventEmitter<Articulo>();
  constructor(private _service: ComunicationService) {
    

  }

  ngOnInit() {
    console.log('en lista');
    this.articulos = this._service.getArticulos();
  }

  onSelect(articulo: Articulo){
    this.articuloChanged.emit(articulo);
  }
}
