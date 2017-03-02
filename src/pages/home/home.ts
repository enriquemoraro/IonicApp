import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
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
  
  constructor(public alertCtrl: AlertController, public nav: NavController, private formData: Rfcservice) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      rfc: '',
      ine: '',
      curp: ''
    }
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

  updateItem(data){
    if(data.tos == true){
      this.doPrompt();   
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
