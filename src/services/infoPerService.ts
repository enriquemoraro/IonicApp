import {Injectable} from '@angular/core';

@Injectable()
export class MyInfoPerService {
  public nombre: string = '';
  public appaterno: string;
  public apmaterno: string = '';
  
  constructor() {
  }
} 