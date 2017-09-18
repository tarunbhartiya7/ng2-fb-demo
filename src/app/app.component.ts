import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //private items;
  // items: FirebaseListObservable<any[]>;
  items: any;

  
  constructor(private af: AngularFire){
    // this.items = af.database.list('/Cars');
    af.database.list('/Cars').subscribe(
      data => this.items = data,
      error => console.log(error)
    )
  }
}
