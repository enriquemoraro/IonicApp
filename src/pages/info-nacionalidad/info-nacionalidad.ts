import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { MyNacionalidadService } from '../../services/nacionalidadService';
import { InfoContactoPage } from '../../pages/info-contacto/info-contacto';
import { GeneralService } from '../../services/GeneralService';
/*
  Generated class for the InfoNacionalidad page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-info-nacionalidad',
  templateUrl: 'info-nacionalidad.html'
})
export class InfoNacionalidadPage {
 private data: any;
  private isSubmitted: Boolean = false;
 
  
  constructor(public nav: NavController, public formData: GeneralService) {
 console.log(formData);
    this.nav = nav;
    this.formData = formData;
    this.data = {
    nacionalidad: '',
    pais: '',
    month: ''
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
      this.nav.push(InfoContactoPage); 
    }

  }
  
  noSubmit(e) {
  
    e.preventDefault();
  }

 public  event = {
    month: '',
    timeStarts: '07:43',
    timeEnds: ''
  }

}
