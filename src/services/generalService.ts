import {Injectable} from '@angular/core';
import {DatosIdentificacion, DatosPersonales} from '../models';

@Injectable()
export class GeneralService {
  public identificacion: DatosIdentificacion;
  public persona: DatosPersonales;

  constructor() {
  }
}