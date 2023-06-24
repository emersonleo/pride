import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonTypeComponent } from './button-type/button-type.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ModalInfoComponent,
    ButtonTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
