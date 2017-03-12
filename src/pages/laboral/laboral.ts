import { Component } from '@angular/core';
import { NavController, AlertController,ModalController } from 'ionic-angular';
import { LaboralService } from '../../services/laboralservice';
import { GeneralService } from '../../services/GeneralService';
import { CoberturaSeguro } from './coberturaSeguro';

@Component({
  selector: 'page-laboral',
  templateUrl: 'laboral.html'
})
export class LaboralPage {
private data: any;
private isSubmitted: Boolean = false;
 

  constructor(public nav: NavController,  public formData: GeneralService,public alertCtrl: AlertController,
 
 
  public modalCtrl: ModalController) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      ocupacion: '',
      actividad: '',
      ingresos: '',
      noserie:'',
      tos: false,
    }


  }
  
   onSubmit(screenform) {

 

    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(screenform);
    
    if ((screenform.valid)) {
        this.formData.laboral = {
         actividad: this.data.actividad,
         ocupacion: this.data.ocupacion,
         ingresos: this.data.ingresos,
         noserie: this.data.noserie
    };
      //this.nav.push(CuestionarioPage); 
    }

  }

        ingresaCobertura(){

        // create modal
        let modal = this.modalCtrl.create(CoberturaSeguro);
        // open modal
        modal.onDidDismiss( data => {
            if ( data!= null && data!= undefined ){
            }          
        });

        modal.present();      
      

    }

}
