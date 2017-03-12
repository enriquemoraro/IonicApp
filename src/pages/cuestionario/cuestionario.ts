import { Component } from '@angular/core';
import { NavController ,AlertController } from 'ionic-angular';
import { MyCuestionarioService } from '../../services/cuestionarioService';
//import { InfoNacionalidadPage } from '../info-nacionalidad/info-nacionalidad';

/*
  Generated class for the Cuestionario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html'
})
export class CuestionarioPage {

private data: any;
//private isSubmitted: Boolean = false;
  
  constructor(public nav: NavController, private formData: MyCuestionarioService,public alertCtrl: AlertController) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
    tos: false
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuestionarioPage');
  }

doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }





}
