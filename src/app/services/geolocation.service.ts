import { Injectable } from '@angular/core';
import { ICoordinates } from "../models/restaurant.interface";
import { Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private coords: ReplaySubject<GeolocationCoordinates> = new ReplaySubject<GeolocationCoordinates>(1);

  haversineDistance(lat: number, lon: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the Earth in kilometers
    const latRad1 = this.degrees2Radians(lat);
    const latRad2 = this.degrees2Radians(lat2);
    const deltaLat = this.degrees2Radians(lat2 - lat);
    const deltaLon = this.degrees2Radians(lon2 - lon);

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(latRad1) * Math.cos(latRad2) *
      Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round((R * c + Number.EPSILON) * 100) / 100; // Distance in kilometers
  }

  private degrees2Radians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  getCurrentCoordinate(): Observable<ICoordinates> {
    return this.coords;
  }

  calculateCurrentCoordinates(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => this.savePosition(position),
        error => this.showLocationError(error)
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  savePosition(position: GeolocationPosition): void {
    this.coords.next(position.coords);
  }

  showLocationError(error: GeolocationPositionError): void {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      default:
        console.log("An unknown error occurred.");
        break;
    }
  }
}
