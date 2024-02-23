import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterbookComponent } from './components/registerbook/registerbook.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
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
    },
    {
        path : '**', 
        component : NotfoundComponent
    }
];
