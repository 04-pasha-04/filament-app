import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:any
 

  constructor() { }

  setData(_data:any){
    this.data = _data
    

  }
}
