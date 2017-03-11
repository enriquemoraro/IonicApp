import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaboralService } from '../../services/laboralservice';

//import { CuestionarioPage } from '../cuestionario/cuestionario';
/*
  Generated class for the Laboral page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-laboral',
  templateUrl: 'laboral.html'
})
export class LaboralPage {
private data: any;
private isSubmitted: Boolean = false;
  
  constructor(public nav: NavController, private formData: LaboralService) {
    this.nav = nav;
    this.formData = formData;
    this.data = {
      ocupacion: '',
      actividad: '',
      ingresos: '',
      noserie:'',
      tos: false,
    }

  }
  
   onSubmit(laboralservice) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(laboralservice);
    
    if ((laboralservice.valid)) {
      this.formData.ocupacion = this.data.ocupacion;
      this.formData.actividad = this.data.actividad;
      this.formData.ingresos = this.data.ingresos; 
      this.formData.noserie = this.data.noserie; 
      //this.nav.push(CuestionarioPage); 
    }

  }

}
