import { Injectable, EventEmitter } from '@angular/core';
import { Articulo } from './articulo';
import { Comentario } from './comentario';

//El servicio es el encargado de adminitrar los datos a los diferentes componentes, 
//todas las funciones declaradas aquí, se ejecutarán donde se importe el servicio.
@Injectable()
export class ComunicationService {
  public emitter = new EventEmitter();
  
  public social =[
    {enlace:'http://www.facebook.com',icono:'fa fa-facebook-square'},
    {enlace:'http://www.linkedin.com',icono:'fa fa-twitter-square'},
    {enlace:'http://www.twitter.com',icono:'fa fa-linkedin-square'},
    {enlace:'http://www.instagram.com',icono:'fa fa-instagram'},
    {enlace:'http://www.vibeo.com',icono:'fa fa-vimeo-square'},
    {enlace:'http://www.youtube.com',icono:'fa fa-youtube-square'}
  ];

  public articulos: Articulo[] = [
     {titulo:'Artículo 1', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', 
     comentarios :[
      { autor: 'Manolo', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: new Date(2017,5,18,20,30)}
    ], autor: 'Julian Escribano', fecha: new Date(2017,1,1,20,0)},
     {titulo:'Artículo 2', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', 
     comentarios :[
        { autor: 'Fermín', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: new Date(2015,6,8,19,30)},
        { autor: 'Germán', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: new Date(2016,2,4,10,13)},
        { autor: 'Luisa', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: new Date(2013,5,1,11,2)}
      ], autor: 'Fermín Palomares', fecha: new Date(2017,5,12,20,0)
    },
     {titulo:'Artículo 3', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',
     comentarios :[
        { autor: 'Teresa', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: new Date(2017,0,8,12,0)},
        { autor: 'Álvaro', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: new Date(2017,2,1,10,30)}
      ], autor: 'Álvaro de Dios', fecha: new Date(2017,4,8,20,0)},
     {titulo:'Artículo 4', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.', 
    comentarios :[
        { autor: 'Jacinto', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: new Date(2013,5,18,20,30)},
        { autor: 'Lorena', contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae impedit, officia ipsum. Numquam praesentium doloremque assumenda molestiae dolorum, quam, possimus atque aperiam, repudiandae odio error vitae distinctio ipsa quisquam provident.',fecha: new Date(2014,6,8,10,30)}
      ], autor: 'Gerónimo Daltónico', fecha: new Date(2017,6,24,20,0)
    }];

  constructor() { 
    console.log("contructor");
  }

  getArticulos(){
    console.log('getArticulos');
    return this.articulos;
  }

  getLastArticulo(){
    console.log('getLastArticulo');
    return this.articulos[0];
  }

  getListaSocial(){
    return this.social;
  }

  newArticulo(articulo:Articulo){
    this.articulos.push(articulo);
  }
}
