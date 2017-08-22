import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { ComunicationService } from '../comunication.service';
import { Subscription }   from 'rxjs/Subscription';
import { Articulo } from '../articulo';
import { Comentario } from '../comentario';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() selected: Articulo;
  comentarioNuevo = new EventEmitter<Comentario>();
  contenido: string;
  autor: string;
  nuevoComentario: Comentario;

  constructor(private _service: ComunicationService) { 
     
  }

  ngOnInit() {
  }

  agregarComentario(){
    this.nuevoComentario = {autor: this.autor, contenido: this.contenido, fecha:new Date()};
    console.log(this.nuevoComentario);
    this.comentarioNuevo.emit(this.nuevoComentario);
    //this.selected.comentarios.push(this.nuevoComentario);
    this.autor = "";
    this.contenido = "";
  }
}
