  import {Injectable} from '@angular/core';

@Injectable()
export class MyDomicilioService {
  public cpostal: number;
  public infocalle: string = '';
  public noexterior: number;   
  public noixterior: number;
  public domicilioPais: string = '';
  public domicilioEstado: string = '';
  public domicilioColonia: string = '';
  public domicilioDelegacion: string = '';
  
  constructor() {
  }
} 
  