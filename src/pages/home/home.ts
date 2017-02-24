import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Rfcservice } from '../../services/rfcservice';
//import { GeninfoPage } from '../geninfo/geninfo';
import { InfoPersonaPage } from '../info-persona/info-persona';
//import { PerfiltransPage } from '../perfiltrans/perfiltrans';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 private data: any;
  private isSubmitted: Boolean = false;
  
  constructor(public nav: NavController, private formData: Rfcservice) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      rfc: '',
      ine: '',
      curp: ''
   
    }
  }

    onSubmit(rfcservice) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(rfcservice);
    
    if ((rfcservice.valid) ) {
      this.formData.rfc = this.data.rfc;
      this.formData.ine = this.data.ine;
      this.formData.curp = this.data.curp; 
      this.nav.push(InfoPersonaPage);
   // this.nav.push(PerfiltransPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad info-Persona-Page');
  }

}
