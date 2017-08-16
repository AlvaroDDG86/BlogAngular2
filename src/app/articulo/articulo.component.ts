import { Component, OnInit, Input } from '@angular/core';
import { ComunicationService } from '../comunication.service';
import { Subscription }   from 'rxjs/Subscription';
import { Articulo } from '../articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() selected: Articulo;

  constructor(private _service: ComunicationService) { 
     
  }

  ngOnInit() {
  }

}
