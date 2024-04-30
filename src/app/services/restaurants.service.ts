import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { combineLatest, map, Observable } from "rxjs";
import { GeolocationService } from "./geolocation.service";
import { ICategory } from "../models/category.interface";
import { ICoordinates, IRestaurant, IRestaurantVM } from "../models/restaurant.interface";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private apiUrl: string = 'https://api.last.app/frontend-interview/restaurants/';

  constructor(private http: HttpClient, private geoService: GeolocationService) {
    this.geoService.calculateCurrentCoordinates();
  }

  getCatalog(id: string, query?: string): Observable<ICategory[]> {
    const queryParams = new HttpParams();

    if(query) {
      queryParams.set('query', query);
    }

    return this.http.get<ICategory[]>(`${this.apiUrl}${id}/catalog`, { params: queryParams });
  }

  getRestaurantsList(): Observable<IRestaurantVM[]> {
    return combineLatest([
      this.geoService.getCurrentCoordinate(),
      this.http.get<IRestaurant[]>(this.apiUrl)
    ]).pipe(
      map(([coords, restaurants]: [ICoordinates, IRestaurant[]]) => {
        return restaurants.map((restaurant: IRestaurant) => {
          return {
            ...restaurant,
            distance: this.geoService.haversineDistance(
              coords.latitude,
              coords.longitude,
              restaurant.coordinates.latitude,
              restaurant.coordinates.longitude
            )
          }
        })
      })
    );

  }
}
