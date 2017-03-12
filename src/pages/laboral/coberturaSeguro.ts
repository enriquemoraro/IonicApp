import { Component} from '@angular/core';
import { ViewController, NavParams,AlertController,ModalController } from 'ionic-angular';
import { CoberturaMonto } from './coberturaMonto';

@Component({
    templateUrl: 'coberturaSeguro.html'
})
export class CoberturaSeguro {
private data: any;

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
        let modal = this.modalCtrl.create(CoberturaMonto);
        // open modal

        modal.onDidDismiss( data => {

            if ( data!= null && data!= undefined ){


            }          
        });

        modal.present();      
    }


}

  