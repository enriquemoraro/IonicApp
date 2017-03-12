import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { PerfilService } from '../../services/perfilservice';
import { LaboralPage } from '../laboral/laboral';
import { GeneralService } from '../../services/GeneralService';
/*
  Generated class for the PerfilTrans page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil-trans',
  templateUrl: 'perfil-trans.html'
})
export class PerfilTransPage {
 private data: any;
  private isSubmitted: Boolean = false;
  
  constructor(public nav: NavController, private formData: GeneralService) {
   this.nav = nav;
console.log(formData);
    this.formData = formData;
    this.data = {
      transmes: '',
      transmes2: '',
      retirosmen1: '',
      retirosmen2: ''
    }
  }

  onSubmit(screenForm) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(screenForm);
    
    if ((screenForm.valid) ) {
      this.formData.transaccion = {
         transmes: this.data.transmes,
         transmes2: this.data.transmes2,
         retirosmen1: this.data.retirosmen1,
         retirosmen2: this.data.retirosmen2,
    };       this.nav.push(LaboralPage);
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfiltransPage');
  }
}
