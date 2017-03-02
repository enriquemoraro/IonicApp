import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyContactoService } from '../../services/contactoservice';
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
  
  constructor(public nav: NavController, private formData: MyContactoService) {
   this.nav = nav;
    this.formData = formData;
    this.data = {
      telefono: '',
      email: '',
      tos: false
    }
  }

  onSubmit(contactoservice) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(contactoservice);
    
    if ((contactoservice.valid) ) {
      this.formData.telefono = this.data.telefono;
      this.formData.email = this.data.email;
      this.nav.push(InfoDomicilioPage);
    }
  }
  
  noSubmit(e) {
    e.preventDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeninfoPage');
  }
}
