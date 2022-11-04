import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const Material_Module =[
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  BrowserAnimationsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material_Module
  ],
  exports:[
    Material_Module
  ]
})
export class MaterialModule { }
