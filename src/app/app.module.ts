import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Rfcservice } from '../services/rfcservice';
import { InfoPersonaPage } from '../pages/info-persona/info-persona';
import { MyInfoPerService } from '../services/infoPerService';
import { MyNacionalidadService } from '../services/nacionalidadService';
import { MyDomicilioService } from '../services/domicilioService';
import { InfoNacionalidadPage } from '../pages/info-nacionalidad/info-nacionalidad';
import { InfoDomicilioPage} from '../pages/info-domicilio/info-domicilio';
import { PerfilService } from '../services/perfilservice';
import { PerfilTransPage} from '../pages/perfil-trans/perfil-trans';
import { MyContactoService } from '../services/contactoservice';
import { InfoContactoPage } from '../pages/info-contacto/info-contacto';
import { HabitosPage } from '../pages/habitos/habitos';
import { InvestigacionPage } from '../pages/investigacion/investigacion'; 
import { MyInvestigacionService } from '../services/investigacionService';
import { MyHabitosService } from '../services/habitosService';
import { CuestionarioPage } from '../pages/cuestionario/cuestionario';
import { AportacionesPage } from '../pages/aportaciones/aportaciones';
import { MyAportacionesService } from '../services/aportacionesService';
<<<<<<< HEAD
import { GeneralService } from '../services/generalService';
=======
import { GeneralService } from '../services/GeneralService';
import { LaboralPage } from '../pages/laboral/laboral';
import { LaboralService } from '../services/laboralservice';
import { CoberturaMonto } from '../pages/laboral/coberturaMonto';
import { CoberturaSeguro } from '../pages/laboral/coberturaSeguro';
import { MyCoberturaMontoService } from '../services/coberturaMontoService';
import { MyCuestionarioService } from '../services/cuestionarioService';
import { ModalHabitos } from '../pages/habitos/modalHabitos';


>>>>>>> test2

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPersonaPage,
    InfoNacionalidadPage,
    InfoDomicilioPage,
    PerfilTransPage,
    InfoContactoPage,
    InvestigacionPage,
    HabitosPage,
    AportacionesPage,
    LaboralPage,
    CoberturaMonto,
    CoberturaSeguro,
    CuestionarioPage,
    ModalHabitos
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPersonaPage,
    InfoNacionalidadPage,
    InfoDomicilioPage,
    PerfilTransPage,
    InfoContactoPage,
    InvestigacionPage,
    HabitosPage,
    AportacionesPage,
    LaboralPage,
    CoberturaMonto,
    CoberturaSeguro,
    CuestionarioPage,
    ModalHabitos
  ],
<<<<<<< HEAD
  providers: [{provide: GeneralService, useClass: GeneralService}, {provide: MyAportacionesService, useClass: MyAportacionesService}, {provide: MyHabitosService, useClass: MyHabitosService}, {provide: MyInvestigacionService, useClass: MyInvestigacionService}, {provide: MyContactoService, useClass: MyContactoService}, {provide: PerfilService, useClass: PerfilService}, {provide: MyDomicilioService, useClass: MyDomicilioService}, {provide: MyNacionalidadService, useClass: MyNacionalidadService}, {provide: MyInfoPerService, useClass: MyInfoPerService}, {provide: Rfcservice, useClass: Rfcservice}, {provide: ErrorHandler, useClass: IonicErrorHandler}]
=======
  providers: [{provide: MyCuestionarioService, useClass: MyCuestionarioService}, {provide: MyCoberturaMontoService, useClass: MyCoberturaMontoService}, {provide: GeneralService, useClass: GeneralService},{provide: LaboralService, useClass: LaboralService},{provide: MyAportacionesService, useClass: MyAportacionesService}, {provide: MyHabitosService, useClass: MyHabitosService}, {provide: MyInvestigacionService, useClass: MyInvestigacionService}, {provide: MyContactoService, useClass: MyContactoService}, {provide: PerfilService, useClass: PerfilService}, {provide: MyDomicilioService, useClass: MyDomicilioService}, {provide: MyNacionalidadService, useClass: MyNacionalidadService}, {provide: MyInfoPerService, useClass: MyInfoPerService}, {provide: Rfcservice, useClass: Rfcservice}, {provide: ErrorHandler, useClass: IonicErrorHandler}]
>>>>>>> test2
})
export class AppModule {}
