import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { FilamentsComponent } from '../filaments/filaments.component';



@Component({
  selector: 'app-filaments-form',
  templateUrl: './filaments-form.component.html',
  styleUrls: ['./filaments-form.component.css']
})

export class FilamentsFormComponent{

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

  constructor(private db: AngularFireDatabase) { }

  filamentForm = new FormGroup({
    name : new FormControl('', [Validators.minLength(3),Validators.maxLength(25),Validators.required]),
    brand : new FormControl('', [Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    material : new FormControl('',[Validators.required]),
    weight : new FormControl('', [Validators.minLength(2),Validators.maxLength(4),Validators.required]),
    price : new FormControl('', [Validators.minLength(2),Validators.maxLength(5),Validators.required]),
    diameter : new FormControl('', [Validators.required]),
    imageFile : new FormControl('', [Validators.minLength(3)]),
    
  })

  add(filament:any){

    this.db.list('/filaments').push(filament.value)
    this.filamentForm.reset()
    
  }

}
