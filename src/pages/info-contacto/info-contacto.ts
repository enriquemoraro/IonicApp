import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneralService } from '../../services/GeneralService';
//import { MyContactoService } from '../../services/contactoservice';
import { InfoDomicilioPage } from '../info-domicilio/info-domicilio';

/*
  Generated class for the InfoContacto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-info-contacto',
  templateUrl: 'info-contacto.html'
})
export class InfoContactoPage {
 private data: any;
  private isSubmitted: Boolean = false;
  
  constructor(public nav: NavController, private formData: GeneralService) {
   this.nav = nav;
    this.formData = formData;
    this.data = {
      telefono: '',
      email: '',
      tos: false
    }
  }

  onSubmit(screenform) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(screenform);
    
    if ((screenform.valid) ) {  
    
    this.formData.identificacion = {
         rfc: this.data.rfc,
         curp: this.data.curp,
         ine: this.data.ine
    };
      this.nav.push(InfoDomicilioPage);
      console.log(this.data);
    }
  }
  
  noSubmit(e) {
    e.preventDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeninfoPage');
  }
}
