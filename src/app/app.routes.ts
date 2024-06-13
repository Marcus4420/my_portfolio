import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { AppLibraryComponent } from './app-page/app-library/app-library.component';

export const routes: Routes = [
    { path: 'app-library', component: AppLibraryComponent },
    { path: '', component: HomeComponent },
];
