import { Component} from '@angular/core';
import { ViewController, NavParams,AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'modalSeguro.html'
})
export class modalSeguro {
private data: any;
  //private isSubmitted: Boolean = false;

    constructor(private viewCtrl: ViewController, private params: NavParams,public alertCtrl: AlertController) {
    this.data = {
      monto: ''
     
    }

  }

  cancelar() {
    this.viewCtrl.dismiss();
  }




}
