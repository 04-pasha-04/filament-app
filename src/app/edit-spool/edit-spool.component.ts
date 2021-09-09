import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import { FilamentsComponent } from '../filaments/filaments.component';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-edit-spool',
  templateUrl: './edit-spool.component.html',
  styleUrls: ['./edit-spool.component.css']
})
export class EditSpoolComponent implements OnInit{
  constructor(private db: AngularFireDatabase, private dn : DataService){}

   key:any
   itemRef: Observable<any>
   itemObj:any
   
   ngOnInit(){
    this.key = this.dn.data
    this.itemRef = this.db.object('filaments/'+this.key).valueChanges()
    this.itemRef.subscribe(x => {
      this.itemObj = x
    })
    }
    

   selectedMaterial:any

   selectedDiameter:any
 
   diameters = [
     {value: 1.75},
     {value: 2.85}
   ]
 
   materials = [
     {value : "PLA"},
     {value : "ABS"},
     {value : "PETG"},
     {value : "Nylon"},
     {value : "HiPS"},
     {value : "ASA"},
     {value : "PVA"},
     {value : "PETT"},
     {value : "PET"},
     {value : "TPU"},
     {value : "TPE"},
     {value : "PC"},
     {value : "PP"},
     {value : "WOOD"},
   ]

  
   
  filamentForm = new FormGroup({

    name : new FormControl('', [Validators.minLength(3),Validators.maxLength(25),Validators.required]),
    brand : new FormControl('', [Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    material : new FormControl('',[Validators.required]),
    weight : new FormControl('', [Validators.minLength(2),Validators.maxLength(4),Validators.required]),
    price : new FormControl('', [Validators.minLength(2),Validators.maxLength(5),Validators.required]),
    diameter : new FormControl('', [Validators.required]),
    imageFile : new FormControl('', [Validators.minLength(3)]),
    
  })
  
  edit(filament:any){}


}
