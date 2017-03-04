import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyAportacionesService } from '../../services/aportacionesService';

/*
  Generated class for the Aportaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aportaciones',
  templateUrl: 'aportaciones.html'
})
export class AportacionesPage {
 private data: any;
  private isSubmitted: Boolean = false;
  
  constructor( public nav: NavController, private formData: MyAportacionesService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      producto: '',
      monto: '',
      periodicidad: ''
    }
  }



    onSubmit(aportacionesService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(aportacionesService);
    
    if ((aportacionesService.valid) ) {
      this.formData.producto = this.data.producto;
      this.formData.monto = this.data.monto;
      this.formData.periodicidad = this.data.periodicidad; 
     // this.nav.push(InfoPersonaPage);
   // this.nav.push(PerfiltransPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AportacionesPage');
  }

}
