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
 
  
  constructor(public nav: NavController, private formData: GeneralService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
    nacionalidad: '',
    pais: '',
    month: ''
    }
  }

   onSubmit(GeneralService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(GeneralService);
    
    if ((GeneralService.valid)) {
      this.formData.nacionalidad = this.data.nacionalidad;
      this.formData.pais = this.data.pais;
      this.formData.month = this.data.month;
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
