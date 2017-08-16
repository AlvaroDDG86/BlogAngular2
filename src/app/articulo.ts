import {Comentario} from './comentario';

export class Articulo {
    public titulo: string;
    public descripcion: string;
    public comentarios: Comentario[];
    public autor: string;
    public fecha: Date;
}
