import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { GeneralService } from '../../services/generalService';
=======
//import { MyInfoPerService } from '../../services/infoPerService';
>>>>>>> test2
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
  
<<<<<<< HEAD
  constructor(public nav: NavController,  public formData: GeneralService) {
    console.log(formData);
    this.nav = nav;
    this.data = 
=======
  constructor(public nav: NavController, public formData: GeneralService) {
console.log(formData)
    this.nav = nav;
    this.formData = formData;
   this.data = {
>>>>>>> test2
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      tos: false,
    }
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> test2
    }

  }
  
  noSubmit(e) {
  
    e.preventDefault();
    

  }

}
