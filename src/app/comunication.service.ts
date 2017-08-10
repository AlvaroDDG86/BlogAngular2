import { Injectable, EventEmitter } from '@angular/core';
import { Articulo } from './articulo';

//El servicio es el encargado de adminitrar los datos a los diferentes componentes, 
//todas las funciones declaradas aquí, se ejecutarán donde se importe el servicio.
@Injectable()
export class ComunicationService {
  public emitter = new EventEmitter();

  public articulos: Articulo[] = [

    { titulo: '11', descripcion: 'Mr. Nice'},
    { titulo: '12', descripcion: 'Narco'},
    { titulo: '13', descripcion: 'Bombasto'},
    { titulo: '14', descripcion: 'Celeritas'},
    { titulo: '15', descripcion: 'Magneta'}
  ];
  public selected: Articulo;

  constructor() { 
    this.selected = this.getLastArticulo()
  }

  getArticulos(){
    console.log('getArticulos');
    return this.articulos;
  }

  getLastArticulo(){
    console.log('getLastArticulo');
    return this.articulos[0];
  }

  getArticulo(){
    console.log('getArticulo');
    return this.selected;
  }

  setArticulo(articulo: Articulo){
    console.log('setArticulo');
    this.selected = articulo;
  }

  setSelected(articulo: Articulo){
    this.setArticulo(articulo);
    console.log('emitiendo...');
    this.emitter.emit(this.selected);
  }

}
