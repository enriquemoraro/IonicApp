import { Component} from '@angular/core';
import {ViewController,AlertController,ModalController } from 'ionic-angular';

@Component({
    templateUrl: 'modalHabitos.html'
})
export class pruebaModal {
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

      agregarInversion(){

        // create modal
        let modal = this.modalCtrl.create(pruebaModal);
        // open modal

        modal.onDidDismiss( data => {

            if ( data!= null && data!= undefined ){


            }          
        });

        modal.present();      
    }
    

   public  event = {
    termFunc: ''
  }


}
