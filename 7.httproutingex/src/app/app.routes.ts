import { Routes } from '@angular/router';

import { RegisterbookComponent } from './components/general/registerbook/registerbook.component';
import { HomeComponent } from './components/general/home/home.component';
import { ListbookComponent } from './components/general/listbook/listbook.component';
import { SearchbookComponent } from './components/general/searchbook/searchbook.component';
import { NotfoundComponent } from './components/general/notfound/notfound.component';
import { GeneralContainerComponent } from './components/general/general-container/general-container.component';
import { TemplateDrivenContainerComponent } from './components/template_driven/template-driven-container/template-driven-container.component';
import { HomeComponent1 } from './components/template_driven/home/home.component';
import { RegisterbookComponent1 } from './components/template_driven/registerbook/registerbook.component';
import { ListbookComponent1 } from './components/template_driven/listbook/listbook.component';
import { ReactiveContainerComponent } from './components/reactive/reactive-container/reactive-container.component';
import { HomeComponent2 } from './components/reactive/home/home.component';
import { RegisterbookComponent2 } from './components/reactive/registerbook/registerbook.component';
import { ListbookComponent2 } from './components/reactive/listbook/listbook.component';



export const routes: Routes = [
    {
        path : 'general',
        component : GeneralContainerComponent,
        children : [
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
                path : 'searchbook',
                component : SearchbookComponent
            },
            {
                path : '**', 
                component : NotfoundComponent
            }
        ]
    },
    {
        path : 'template-driven',
        component : TemplateDrivenContainerComponent,
        children : [
            {
                path : 'home',
                component : HomeComponent1
            },
            {
                path : 'registerbook', 
                component : RegisterbookComponent1
            }, 
            {
                path : 'listbooks',
                component : ListbookComponent1
            },
            {
                path : '',
                redirectTo : 'home',
                pathMatch : 'full'
            }
        ]
    },
    {
        path : 'reactive',
        component : ReactiveContainerComponent,
        children : [
            {
                path : 'home',
                component : HomeComponent2
            },
            {
                path : 'registerbook', 
                component : RegisterbookComponent2
            }, 
            {
                path : 'listbooks',
                component : ListbookComponent2
            },
            {
                path : '',
                redirectTo : 'home',
                pathMatch : 'full'
            }
        ]
    },
    {
        path : '',
        component : GeneralContainerComponent   //this empty route is compulsory
    }
];
