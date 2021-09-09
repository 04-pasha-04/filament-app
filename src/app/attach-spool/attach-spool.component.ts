import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable, Subscription} from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-attach-spool',
  templateUrl: './attach-spool.component.html',
  styleUrls: ['./attach-spool.component.css']
})
export class AttachSpoolComponent implements OnInit {

  itemsRef: AngularFireList<any>
  items: Observable<any[]>;

  constructor(private db : AngularFireDatabase, private dn : DataService) {

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
