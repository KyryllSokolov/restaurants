import { Component, Input } from '@angular/core';
import { IRestaurant } from "../../models/restaurant.interface";

@Component({
  selector: 'app-restaurant-tile',
  templateUrl: './restaurant-tile.component.html',
  styleUrl: './restaurant-tile.component.scss'
})
export class RestaurantTileComponent {
  @Input({ required: true }) restaurant!: IRestaurant;
}
