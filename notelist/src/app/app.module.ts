import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAnrOTGkqjBALqca1a1g_YY2h3oMkw09yE",
  authDomain: "notes-acff0.firebaseapp.com",
  databaseURL: "https://notes-acff0.firebaseio.com",
  projectId: "notes-acff0",
  storageBucket: "notes-acff0.appspot.com",
  messagingSenderId: "915913698248"

};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
