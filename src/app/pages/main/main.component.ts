import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from "../../services/restaurants.service";
import { PageLoaderService } from "../../services/page-loader.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  isLoading: Observable<boolean>;
  constructor(
    private restaurantsService: RestaurantsService,
    private pageLoader: PageLoaderService
  ) {
    this.isLoading = this.pageLoader.getLoader();
  }

  ngOnInit() {
    this.restaurantsService
      .getRestaurantsList()
      .subscribe(res => {
      console.log(res);
    });
  }

}
