import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  private loader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  getLoader(): Observable<boolean> {
    return this.loader$.asObservable();
  }

  updateLoader(value: boolean): void {
    this.loader$.next(value);
  }
}
