import { JokesComponent } from './jokes.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export const jokesRoutes = [
    {
        path: '',
        component: JokesComponent
    }
];
