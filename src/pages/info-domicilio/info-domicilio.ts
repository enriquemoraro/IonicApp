import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { MyDomicilioService } from '../../services/domicilioService';
import { PerfilTransPage } from '../perfil-trans/perfil-trans';
import { GeneralService } from '../../services/GeneralService';
@Component({
  selector: 'page-info-domicilio',
  templateUrl: 'info-domicilio.html'
})
export class InfoDomicilioPage {
  public data: any;
  private isSubmitted: Boolean = false;
 
  constructor(public nav: NavController, public formData: GeneralService) {
    this.nav = nav;
  console.log(formData);
    this.formData = formData;
    this.data = {
    cpostal: '',
    infocalle: '',
    noexterior: '', 
    noixterior: '',
    domicilioPais: '',
    domicilioEstado: '',
    domicilioColonia: '',
    domicilioDelegacion: ''
    }
  }
  
  onSubmit(screenform) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(screenform);
    
    if ((screenform.valid)) {
 this.formData.domicilio = {
      cpostal :  this.data.cpostal,
      infocalle : this.data.infocalle,
      noexterior : this.data.noexterior, 
      noixterior : this.data.noixterior,
      domicilioPais : this.data.domicilioPais,
      domicilioEstado : this.data.domicilioEstado,
      domicilioColonia : this.data.domicilioColonia,
      domicilioDelegacion : this.data.domicilioDelegacion
      }
      this.nav.push(PerfilTransPage);
    }

  }
  
  noSubmit(e) {
  
    e.preventDefault();
  }



}