import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneralService } from '../../services/generalService';
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
  
  constructor(public nav: NavController,  public formData: GeneralService) {
    console.log(formData);
    this.nav = nav;
    this.data = 
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      tos: false,
    }
  }

    onSubmit(screenForm) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(screenForm);
    
    if ((screenForm.valid)) {
      this.formData.persona = {
        nombre: this.data.nombre,
        apellidoPaterno: this.data.apellidoPaterno,
        apellidoMaterno: this.data.apellidoMaterno
      }
      this.nav.push(InfoNacionalidadPage); 
    }

  }
  
  noSubmit(e) {
  
    e.preventDefault();
    

  }

}
