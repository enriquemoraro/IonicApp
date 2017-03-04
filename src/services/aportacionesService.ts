import {Injectable} from '@angular/core';

@Injectable()
export class MyAportacionesService {
  public producto: string;
  public monto: number;
  public periodicidad: string;
  
  constructor() {
  }
}