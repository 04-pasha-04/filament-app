import { Component, OnInit,Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireList, FirebaseOperation, DataSnapshot, DatabaseSnapshot } from '@angular/fire/database/interfaces';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitter } from '@angular/core';
import { FilamentsFormComponent } from '../filaments-form/filaments-form.component';
import { EditSpoolComponent } from '../edit-spool/edit-spool.component';


@Component({
  selector: 'app-filaments',
  templateUrl: './filaments.component.html',
  styleUrls: ['./filaments.component.css']
})


export class FilamentsComponent {

  

  items: Observable<any[]>;
  itemsRef: AngularFireList<any>
  @Output() data = new EventEmitter()

  constructor(private db : AngularFireDatabase, private dialog: MatDialog){

    this.itemsRef = db.list('/filaments')
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => { 
        return changes.map(c => ({key : c.payload.key, ...c.payload.val()}))
      })
    ); 
  }
  



  updateRoll(key:any){
    
    this.data.emit(key)
    const dialogRef = this.dialog.open(EditSpoolComponent);
    
  }

  deleteRoll(key:any){
    
    this.db.list('/filaments').remove(key)
    
    
  }

  addRoll(){
    const dialogRef = this.dialog.open(FilamentsFormComponent);
  }
  
 

}

