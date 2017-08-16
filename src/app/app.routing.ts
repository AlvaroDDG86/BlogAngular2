import {Routes,RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NuevoArticuloComponent } from './nuevo-articulo/nuevo-articulo.component';

const  APP_ROUTES: Routes = [
    {path: '' , redirectTo: '', pathMatch: 'full' },
    {path: 'about' , component: AboutComponent },
    {path: 'nuevo' , component: NuevoArticuloComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);