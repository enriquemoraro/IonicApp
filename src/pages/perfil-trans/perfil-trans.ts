import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilService } from '../../services/perfilservice';
import { InvestigacionPage } from '../investigacion/investigacion';

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
  
  constructor(public nav: NavController, private formData: PerfilService) {
   this.nav = nav;
    this.formData = formData;
    this.data = {
      transmes: '',
      transmes2: '',
      retirosmen1: '',
      retirosmen2: ''
    }
  }

  onSubmit(PerfilService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(PerfilService);
    
    if ((PerfilService.valid) ) {
      this.formData.transmes = this.data.transmes;
      this.formData.transmes2 = this.data.transmes2;
      this.formData.retirosmen1 = this.data.retirosmen1;
      this.formData.retirosmen2 = this.data.retirosmen2; 
      this.nav.push(InvestigacionPage);
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfiltransPage');
  }
}
