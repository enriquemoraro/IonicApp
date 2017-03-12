import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { AportacionesPage } from '../aportaciones/aportaciones';
import { MyHabitosService } from '../../services/habitosService';
import { ModalHabitos } from './modalHabitos';

@Component({
  selector: 'page-habitos',
  templateUrl: 'habitos.html'
})
export class HabitosPage {
   private data: any;
  private isSubmitted: Boolean = false;

  constructor(public alertCtrl: AlertController, public nav: NavController, private formData: MyHabitosService,
  public modalCtrl: ModalController) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      tos: false,
      tos2: false,
      tos3: false
    }
  }

    onSubmit(habitosService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(habitosService);
    this.nav.push(AportacionesPage);  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad info-Persona-Page');
  }

 ingresarDroga(){

        // create modal
        let modal = this.modalCtrl.create(ModalHabitos);
        // open modal

        modal.onDidDismiss( data => {

            if ( data!= null && data!= undefined ){


            }          
        });

        modal.present();      
    }

      updateItem(data){
    if(data.tos3 == true){
      this.ingresarDroga();   
    }
  }


}
