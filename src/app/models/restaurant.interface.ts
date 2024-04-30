export interface IRestaurant {
  id: number;
  name: string;
  image: string;
  logo: string;
  rating: IRating;
  coordinates: ICoordinates;
}

export interface IRestaurantVM extends IRestaurant{
  distance: number;
}

export interface IRating {
  total: string;
  average: string;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}
