import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:any

  constructor() { }

  setId(id:string){
    this.data = id
  }
}
