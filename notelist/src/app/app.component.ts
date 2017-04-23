import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    //this.items = af.database.list('/notes');
    this.items = af.database.list('/notes').map((array) => array.reverse()) as FirebaseListObservable<any[]>;
  }

  addNote(noteName: string, categoryName: string) {

    // create a new date - now
    const dateNow = new Date();

    // make it iso style
    const dateNowAsISO = dateNow.toISOString();

    this.items.push({
      note: noteName,
      created: dateNowAsISO,
      category: categoryName
    });
  }

}
