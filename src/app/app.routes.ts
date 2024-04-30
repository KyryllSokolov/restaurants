import { Routes } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: ':id/catalog', component: CatalogComponent },
  { path: '**', redirectTo: '' }
];
