import { Injectable, EventEmitter } from '@angular/core';
import { Articulo } from './articulo';
import { Comentario } from './comentario';

//El servicio es el encargado de adminitrar los datos a los diferentes componentes, 
//todas las funciones declaradas aquí, se ejecutarán donde se importe el servicio.
@Injectable()
export class ComunicationService {
  public emitter = new EventEmitter();

  public comentarios: Comentario[] = [
    { autor: 'Manolo', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: '01/01/2017'},
    { autor: 'Luis', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: '11/03/2017'},
    { autor: 'María', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: '23/06/2017'}
  ]
  
  public social =[
    {enlace:'http://www.facebook.com',icono:'fa fa-facebook-square'},
    {enlace:'http://www.linkedin.com',icono:'fa fa-twitter-square'},
    {enlace:'http://www.twitter.com',icono:'fa fa-linkedin-square'},
    {enlace:'http://www.instagram.com',icono:'fa fa-instagram'},
    {enlace:'http://www.vibeo.com',icono:'fa fa-vimeo-square'},
    {enlace:'http://www.youtube.com',icono:'fa fa-youtube-square'}
  ];

  public articulos: Articulo[];
  public selected: Articulo;

  constructor() { 
    this.articulos = [
     {titulo:'Artículo 1', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', comentarios :this.comentarios},
     {titulo:'Artículo 2', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', comentarios :this.comentarios},
     {titulo:'Artículo 3', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', comentarios :this.comentarios},
     {titulo:'Artículo 4', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', comentarios :this.comentarios},
     {titulo:'Artículo 5', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', comentarios :this.comentarios},
     {titulo:'Artículo 6', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', comentarios :this.comentarios}
    ];
    this.selected = this.getLastArticulo();
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

  getListaSocial(){
    return this.social;
  }
}
