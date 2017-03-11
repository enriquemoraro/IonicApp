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
  
  onSubmit(GeneralService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(GeneralService);
    console.log(this.data);
    
    if ((GeneralService.valid)) {
      this.formData.cpostal =  this.data.cpostal;
      this.formData.infocalle = this.data.infocalle;
      this.formData.noexterior = this.data.noexterior; 
      this.formData.noixterior = this.data.noixterior;
      this.formData.domicilioPais = this.data.domicilioPais;
      this.formData.domicilioEstado = this.data.domicilioEstado;
      this.formData.domicilioColonia = this.data.domicilioColonia;
      this.formData.domicilioDelegacion = this.data.domicilioDelegacion;
      this.nav.push(PerfilTransPage);
    }

  }
  
  noSubmit(e) {
  
    e.preventDefault();
  }



}