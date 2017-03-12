import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { MyInfoPerService } from '../../services/infoPerService';
import { InfoNacionalidadPage } from '../info-nacionalidad/info-nacionalidad';
import { GeneralService } from '../../services/GeneralService';
/*
  Generated class for the InfoPersona page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-info-persona',
  templateUrl: 'info-persona.html'
})
export class InfoPersonaPage {
  private data: any;
  private isSubmitted: Boolean = false;
  
  constructor(public nav: NavController, public formData: GeneralService) {
console.log(formData)
    this.nav = nav;
    this.formData = formData;
   this.data = {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      tos: false,
    }
  }

    onSubmit(screenform) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(screenform);
    
    if ((screenform.valid)) {
this.formData.nacionalidad = {
         nacionalidad: this.data.nacionalidad,
         pais: this.data.pais,
         month: this.data.month
    };

      this.nav.push(InfoNacionalidadPage);
    }

  }
  
  noSubmit(e) {
  
    e.preventDefault();
    

  }

}
