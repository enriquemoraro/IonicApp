import { Component } from '@angular/core';
import { NavController, AlertController,ModalController } from 'ionic-angular';
import { LaboralService } from '../../services/laboralservice';
import { CoberturaSeguro } from './coberturaSeguro';

@Component({
  selector: 'page-laboral',
  templateUrl: 'laboral.html'
})
export class LaboralPage {
private data: any;
private isSubmitted: Boolean = false;
  
  constructor(public nav: NavController, private formData: LaboralService,public alertCtrl: AlertController,
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
  
   onSubmit(laboralservice) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(laboralservice);
    
    if ((laboralservice.valid)) {
      this.formData.ocupacion = this.data.ocupacion;
      this.formData.actividad = this.data.actividad;
      this.formData.ingresos = this.data.ingresos; 
      this.formData.noserie = this.data.noserie; 
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
