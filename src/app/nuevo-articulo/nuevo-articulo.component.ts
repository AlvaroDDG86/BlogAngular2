import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.component.html',
  styleUrls: ['./nuevo-articulo.component.css'],
  providers: [ComunicationService]
})
export class NuevoArticuloComponent implements OnInit {
  public articulo: Articulo;
  
  constructor(private _service: ComunicationService) { 
  }

  ngOnInit() {
    this.articulo = {
      titulo: '',
      descripcion: '',
      autor: '',
      fecha: new Date(),
      comentarios: []
    }
  }

  guardar(){
    this._service.newArticulo(this.articulo);
  }

}
