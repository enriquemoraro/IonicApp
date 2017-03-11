import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Rfcservice } from '../../services/rfcservice';
//import { GeneralService } from '../../services/GeneralService';
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



    onSubmit(rfcservice) {
    this.isSubmitted = true;
   /// console.log('onSubmit');
    console.log('IMPRESION DE RFC SRVICES'+rfcservice);
    
    if ((rfcservice.valid) ) {
      this.formData.rfc = this.data.rfc;
      this.formData.ine = this.data.ine;
      this.formData.curp = this.data.curp; 
      this.nav.push(InfoPersonaPage);
   
     
      //let obj2 = new Rfcservice();
     // obj2.View="a";
   //   console.log(obj2.View);
   //   obj2.rfcs1 = "lo que sea 2";
     // console.log(obj2.rfcs1);
      
    //console.log(obj2.rfc);
 
//  var main:Main=new Main();
let cust = new Rfcservice();
cust.rfc = "Jimi";
cust.setRfc="Jimis";



    }
  
  //let test = new Rfcservice();
 // test.setMethod('test.getMethod() --- need ()');
 // test.setMethod1 = 'test.getMethod1 --- no need (), and used = for set ';
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad info-Persona-Page');
  }

}
