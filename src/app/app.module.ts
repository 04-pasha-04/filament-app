import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { DropZoneDirective } from './drop-zone.directive';
import { FilamentsComponent } from './filaments/filaments.component';
import { PrintersComponent } from './printers/printers.component'; 
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'; 
import { FilamentsFormComponent } from './filaments-form/filaments-form.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { AttachSpoolComponent } from './attach-spool/attach-spool.component';
import { EditSpoolComponent } from './edit-spool/edit-spool.component';
import { SpoolUsageComponent } from './spool-usage/spool-usage.component'; 
import { FormsModule } from '@angular/forms';
import {MatList, MatListModule} from '@angular/material/list'; 
@NgModule({
  declarations: [
    AppComponent,
    DropZoneDirective,
    FilamentsComponent,
    PrintersComponent,
    HeaderComponent,
    
    FilamentsFormComponent,
         AttachSpoolComponent,
         EditSpoolComponent,
         SpoolUsageComponent,
   ],
  imports: [
    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot
    ([
      
      {path : 'filaments', component: FilamentsComponent},
      {path : 'printers', component: PrintersComponent},
      {path : '**', component: HomeComponent},
    ]),
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    
    MatCheckboxModule,
    MatSliderModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
