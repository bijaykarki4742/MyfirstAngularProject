import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public Value:any = {
    fullName: 'Sneha'
  }
  constructor() { }
}
