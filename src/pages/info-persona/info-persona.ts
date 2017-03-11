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
  
  constructor(public nav: NavController, private formData: GeneralService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      nombre: '',
      appaterno: '',
      apmaterno: '',
      tos: false,
    }
  }

    onSubmit(GeneralService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(GeneralService);
    
    if ((GeneralService.valid)) {
      this.formData.nombre = this.data.nombre;
      this.formData.appaterno = this.data.appaterno;
      this.formData.apmaterno = this.data.apmaterno; 
      this.nav.push(InfoNacionalidadPage);
    }

  }
  
  noSubmit(e) {
  
    e.preventDefault();
    

  }

}
