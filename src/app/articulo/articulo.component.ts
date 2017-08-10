import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';
import { Articulo } from '../articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  public selected: Articulo;

  constructor(private _service: ComunicationService) { 
     
  }

  ngOnInit() {
    console.log(this.selected);
    this.selected = this._service.getArticulo();
    console.log(this.selected);
  }

}
