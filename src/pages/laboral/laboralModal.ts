import { Component} from '@angular/core';
import { ViewController, NavParams,AlertController,ModalController } from 'ionic-angular';
import {modalSeguro} from './modalSeguro';

@Component({
    templateUrl: 'laboralModal.html'
})
export class pruebaModal {
private data: any;
  //private isSubmitted: Boolean = false;

    constructor(private viewCtrl: ViewController, private params: NavParams,public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
    this.data = {
      tos1: false
    }

  }

  cancelar() {
    this.viewCtrl.dismiss();
  }

mostrarmontos(){

        // create modal
        let modal = this.modalCtrl.create(modalSeguro);
        // open modal

        modal.onDidDismiss( data => {

            if ( data!= null && data!= undefined ){


            }          
        });

        modal.present();      
    }


}
