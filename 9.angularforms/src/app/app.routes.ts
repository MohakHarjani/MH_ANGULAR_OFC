import { Routes } from '@angular/router';
import { BooktemplatedrivenformComponent } from './components/booktemplatedrivenform/booktemplatedrivenform.component';
import { BookreactiveformComponent } from './components/bookreactiveform/bookreactiveform.component';

export const routes: Routes = [
    {
        path : 'templatedriven',
        component : BooktemplatedrivenformComponent
    },
    {
        path : 'reactive',
        component : BookreactiveformComponent
    }
];
