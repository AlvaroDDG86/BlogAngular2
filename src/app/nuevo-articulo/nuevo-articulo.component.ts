import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';

@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.component.html',
  styleUrls: ['./nuevo-articulo.component.css']
})
export class NuevoArticuloComponent implements OnInit {
  public articulo: Articulo;
  texto: string;
  constructor() { 
     this.texto = "hola";
  }

  ngOnInit() {
    this.texto = "hola";
    this.articulo = {
      titulo: 'Título del artículo',
      descripcion: 'Contenido del artículo',
      autor: 'Autor del artículo',
      fecha: new Date(),
      comentarios: []
    }
  }

  guardar(){
    alert(this.articulo.titulo);
  }

}
