import {Injectable} from '@angular/core';

@Injectable()
export class MyContactoService {
  public telefono: number =0;
  public email: string;
  
  constructor() {
  }
}