import { Component} from '@angular/core';
import { ViewController, NavParams,AlertController,NavController } from 'ionic-angular';
import { MyCoberturaMontoService } from '../../services/coberturaMontoService';
import { InvestigacionPage } from  '../investigacion/investigacion';


@Component({
    templateUrl: 'coberturaMonto.html'
})
export class CoberturaMonto {
 private data: any;
  private isSubmitted: Boolean = false;

    constructor(public nav: NavController, private viewCtrl: ViewController, private params: NavParams,public alertCtrl: AlertController,
    private formData: MyCoberturaMontoService) {
    this.nav = nav;
    this.formData = formData;    
    this.data = {
      monto: ''     
    }

  }

  cancelar() {
    this.viewCtrl.dismiss();
  }

  onSubmit(coberturaMontoService) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(coberturaMontoService);
    
    if ((coberturaMontoService.valid) ) {
      this.formData.monto = this.data.monto; 
      this.nav.push(InvestigacionPage);
    }
  }
}
