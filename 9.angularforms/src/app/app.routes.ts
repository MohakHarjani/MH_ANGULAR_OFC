import { Routes } from '@angular/router';
import { BooktemplatedrivenformComponent } from './components/booktemplatedrivenform/booktemplatedrivenform.component';
import { EmpReactiveComponent } from './components/empreactiveform/emp-reactive.component';
import { BookreactiveformComponent } from './components/bookreactiveform/bookreactiveform.component';


export const routes: Routes = [
    {
        path : 'templatedriven',
        component : BooktemplatedrivenformComponent
    },
    {
        path : 'empreactive',
        component : EmpReactiveComponent
    },
    {
        path : 'bookreactive',
        component : BookreactiveformComponent
    }
];
