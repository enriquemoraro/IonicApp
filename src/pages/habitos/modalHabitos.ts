import { Component} from '@angular/core';
import {ViewController,AlertController,ModalController } from 'ionic-angular';

@Component({
    templateUrl: 'modalHabitos.html'
})
export class ModalHabitos {
private data: any;
  //private isSubmitted: Boolean = false;

  constructor(private viewCtrl: ViewController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    //this.nav = nav;
    //this.formData = formData;
    this.data = {
      termFunc: '' 
    }
  }

  cancelar() {
    this.viewCtrl.dismiss();
  }   

   public  event = {
    termFunc: ''
  }


}
