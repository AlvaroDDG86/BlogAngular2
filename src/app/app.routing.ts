import {Routes,RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NuevoArticuloComponent } from './nuevo-articulo/nuevo-articulo.component';
import { InicioComponent } from './inicio/inicio.component';

const  APP_ROUTES: Routes = [
    {path: '' , redirectTo: '/inicio', pathMatch: 'full' },
    {path: 'inicio' , component: InicioComponent },
    {path: 'about' , component: AboutComponent },
    {path: 'nuevo' , component: NuevoArticuloComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);