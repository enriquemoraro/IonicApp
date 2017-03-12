import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//import { HomePage } from '../pages/home/home';
import { HabitosPage } from '../pages/habitos/habitos';
//import { InvestigacionPage } from '../pages/investigacion/investigacion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HabitosPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
