import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { GeneralService } from '../../services/GeneralService';
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
  
  constructor(public alertCtrl: AlertController, public nav: NavController, public formData: GeneralService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      rfc: '',
      ine: '',
      curp: '',
      tos: false
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



    onSubmit(screenform) {
    this.isSubmitted = true;
    
    if ((screenform.valid) ) {
    
     this.formData.identificacion = {
         rfc: this.data.rfc,
         curp: this.data.curp,
         ine: this.data.ine
    };    
      this.nav.push(InfoPersonaPage);
   
  


    }
  
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad info-Persona-Page');
  }

}
