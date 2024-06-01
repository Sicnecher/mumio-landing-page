import { Routes } from '@angular/router';
import { PresentionComponent } from './components/buying-proccess/children/presention/presention.component';
import { PageComponent } from './components/page/page.component';
import { ImageComponent } from './components/page/children/image/image.component';

export const routes: Routes = [ 
        {
            path: '',
            component: PageComponent
        }
    ];
