import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { FilamentsComponent } from '../filaments/filaments.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-edit-spool',
  templateUrl: './edit-spool.component.html',
  styleUrls: ['./edit-spool.component.css']
})
export class EditSpoolComponent implements OnInit{
  

  constructor(private db: AngularFireDatabase){
  
   }

  filamentForm = new FormGroup({
    name : new FormControl('', [Validators.minLength(3),Validators.required]),
    brand : new FormControl('', [Validators.minLength(3),Validators.required]),
    weight : new FormControl('', [Validators.minLength(2),Validators.required]),
    price : new FormControl('', [Validators.minLength(2),Validators.required]),
    diameter : new FormControl('', [Validators.minLength(2),Validators.required]),
    imageFile : new FormControl('', [Validators.minLength(3)]),
    
  })

  ngOnInit(){

  }

  onEditSpool(key:any){

    console.log(key)
    
    
  }

  edit(filament:any){}


}
