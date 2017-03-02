import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyInfoPerService } from '../../services/infoPerService';
import { InfoNacionalidadPage } from '../info-nacionalidad/info-nacionalidad';

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
  
  constructor(public nav: NavController, private formData: MyInfoPerService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      nombre: '',
      appaterno: '',
      apmaterno: '',
      tos: false,
    }
  }

    onSubmit(infoPerService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(infoPerService);
    
    if ((infoPerService.valid)) {
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
