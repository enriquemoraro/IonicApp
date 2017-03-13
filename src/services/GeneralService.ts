import {Injectable} from '@angular/core';

import {DatosIdentificacion, DatosPersonales,InfoNacionalidad,InfoDomicilio,PerfilTransaccional,Laboral} from '../models';
@Injectable()
export class GeneralService {
public identificacion: DatosIdentificacion;
public persona: DatosPersonales;  
public nacionalidad:InfoNacionalidad;
public domicilio:InfoDomicilio;
public transaccion:PerfilTransaccional;
public laboral:Laboral;
constructor() {



  }


}