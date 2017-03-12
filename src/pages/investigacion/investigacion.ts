import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//import { MyInvestigacionService } from '../../services/investigacionService';
import { GeneralService } from '../../services/GeneralService';
import { CuestionarioPage } from '../cuestionario/cuestionario';

@Component({
  selector: 'page-investigacion',
  templateUrl: 'investigacion.html'
})
export class InvestigacionPage {
 private data: any;
  private isSubmitted: Boolean = false;
  
  constructor( public alertCtrl: AlertController, public nav: NavController, private formData: GeneralService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      nomCompleto: '',
      puesto: '',
      parentesco: '',
      inicioFunc: '',
      termFunc: '' 
    }
  }

    onSubmit(investigacionService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(investigacionService);
    
    if ((investigacionService.valid)) {
      this.formData.nomCompleto = this.data.nomCompleto;
      this.formData.puesto = this.data.puesto;
      this.formData.parentesco = this.data.parentesco; 
      this.formData.inicioFunc = this.data.inicioFunc; 
      this.formData.termFunc = this.data.termFunc; 
      this.nav.push(CuestionarioPage); 
    }

  }

   public  event = {
    inicioFunc: '',
    termFunc: ''
  }
  
doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Otro parentesco',
      message: "Por favor indique otro parentesco.",
      inputs: [
        {
          name: 'Parentesco',
          placeholder: 'Parentesco'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  updateItem(data){
    if(data.parentesco == "otro"){
      this.doPrompt();   
    }
  }
  




}
