import { Injectable } from '@angular/core';
import { Rfcservice } from "./rfcservice";

@Injectable()
export class GeneralService{

  //public rfc: string;
   public rfc: string;
  public transmes: string;
  public retirosmen1: string;
  public transmes2: string;
  public retirosmen2: string;
  public nacionalidad: string = '';
  public pais: string = '';
  public month: '';
  public nomCompleto: string = '';
  public puesto: string = '';
  public parentesco: string = '';
  public inicioFunc: '';
  public termFunc: '';
  public nombre: string = '';
  public appaterno: string;
  public apmaterno: string = '';
  public cpostal: number;
  public infocalle: string = '';
  public noexterior: number;
  public noixterior: number;
  public domicilioPais: string = '';
  public domicilioEstado: string = '';
  public domicilioColonia: string = '';
  public domicilioDelegacion: string = '';
  public telefono: number = 0;
  public email: string;
  public producto: string;
  public monto: number;
  public periodicidad: string;


  constructor() {
   
     // let test = new Rfcservice();
let cust = new Rfcservice();
console.log(cust);


}
}