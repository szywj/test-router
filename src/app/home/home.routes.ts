import { SecondEntryComponent } from './second-entry/second-entry.component';
import { FirstEntryComponent } from './first-entry/first-entry.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

export const homeRoutes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'firstentry',
                pathMatch: 'full'
            },
            {
                path: 'firstentry',
                component: FirstEntryComponent
            },
            {
                path: 'secondentry',
                component: SecondEntryComponent
            }
        ]
    }
];
