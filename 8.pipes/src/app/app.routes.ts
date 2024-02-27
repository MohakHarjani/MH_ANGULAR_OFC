import { Routes } from '@angular/router';
import { GeneralpipeComponent } from './components/generalpipe/generalpipe.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { RegisterbookComponent } from './components/registerbook/registerbook.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {
        path : 'generalPipes',
        component : GeneralpipeComponent
    },
    {
        path : 'home', 
        component : HomeComponent
    },
    {
        path : 'registerbook', 
        component : RegisterbookComponent
    }, 
    {
        path : 'listbooks',
        component : ListbookComponent
    },
    {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
    }
];
