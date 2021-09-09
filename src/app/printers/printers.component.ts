import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.css']
})
export class PrintersComponent implements OnInit {

  itemsRef: AngularFireList<any>
  items: Observable<any[]>;

  constructor(private db : AngularFireDatabase) {

    this.itemsRef = db.list('/printers')
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => { 
        return changes.map(c => ({key : c.payload.key, ...c.payload.val()}))
      })
    ); 

  }

  ngOnInit(): void {
  }

}
