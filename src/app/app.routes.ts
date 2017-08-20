import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        // path: 'home/:page',
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'home/:page',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'jokes',
        loadChildren: './jokes/jokes.module#JokesModule'
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];
