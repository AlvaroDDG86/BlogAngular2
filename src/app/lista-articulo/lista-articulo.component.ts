import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ComunicationService } from '../comunication.service';
import { Articulo } from '../articulo';
import { Comentario } from '../comentario';

 

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css'],
  providers: [ComunicationService],
  outputs: ['articuloChanged']
})

export class ListaArticuloComponent implements OnInit {
  @Input() nuevoComentario: Comentario;
  @Input() nuevoArticulo: Articulo;
  selected: Articulo;
  public articulos: Articulo[];
  articuloChanged = new EventEmitter<Articulo>();
  constructor(private _service: ComunicationService) {
    
  }

  ngOnInit() {
    console.log('en lista');
    this.articulos = this._service.getArticulos();
  }

  onSelect(articulo: Articulo){
    this.selected = articulo;
    this.articuloChanged.emit(articulo);
  }
}
