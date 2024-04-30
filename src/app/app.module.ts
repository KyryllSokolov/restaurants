import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { MainComponent } from './pages/main/main.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { RestaurantTileComponent } from './components/restaurant-tile/restaurant-tile.component';
import { ProductComponent } from './components/product/product.component';
import { PageLoaderComponent } from "./components/page-loader/page-loader.component";
import { routes } from "./app.routes";



@NgModule({
  declarations: [
    MainComponent,
    CatalogComponent,
    RestaurantTileComponent,
    ProductComponent,
    PageLoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppModule { }
