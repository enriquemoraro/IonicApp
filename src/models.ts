export interface DatosIdentificacion {
  rfc?: string;
  curp?: string;
  ine?: string;
}

export interface DatosPersonales {
  nombre?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
}


export interface InfoNacionalidad {
    nacionalidad?: string;
    pais?: string;
    month?: '';
}

export interface InfoDomicilio {
    cpostal?: number;
     infocalle?: string;
  noexterior?: number;   
   noixterior?: number;
   domicilioPais?: string;
   domicilioEstado?: string;
   domicilioColonia?: string;
   domicilioDelegacion?: string;
  
}


export interface PerfilTransaccional {
   transmes?: string;
   retirosmen1?: string;
   transmes2?: string;
   retirosmen2?: string;
}

export interface Laboral {
  ocupacion?: string;
   actividad?: string;
   ingresos?: string;
   noserie?: string;
}