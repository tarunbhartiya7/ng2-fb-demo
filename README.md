# MyCarsFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Steps to proceed:
---------------------

1.Go to firebase - console - create a new project

2.Go to database and enter some data

3.You will see some security warnings, so go to rules and set read and write to true.
"rules": {
    ".read": "true",
    ".write": "true"
 }

4.Using angular 2 cli create a blank project

5.Then install angularfire2 and firebase setups using npm and save them in package.json
npm install angularfire2 firebase --save

6.in the src-environments - create a firebase.config.ts
export const firebaseConfig = {
	//copy paste contents from firebase configuration
	//This will include apiKey, authDomain, databaseUrl, storageBucket
}

7.import above firebaseConfig and angularfiremodule from angularfire2 in app.module.ts

8.In the same file in imports section, 
AngularFireModule.initializeApp(firebaseConfig)

9.app.component.ts looks like this:
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire){
    this.items = af.database.list('/items');
  }
}

Publish on github pages
-----------------------
Run:
npm i -g angular-cli-ghpages

ng build --prod --base-href https://tarunbhartiya7.github.io/ng2-fb-demo/

ngh

Go to https://tarunbhartiya7.github.io/ng2-fb-demo/ once you get successfully published....Hurray!!!!



