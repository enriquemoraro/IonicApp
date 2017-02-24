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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPersonaPage,
    InfoNacionalidadPage,
    InfoDomicilioPage,
    PerfilTransPage
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
    PerfilTransPage
  ],
  providers: [{provide: PerfilService, useClass: PerfilService}, {provide: MyDomicilioService, useClass: MyDomicilioService}, {provide: MyNacionalidadService, useClass: MyNacionalidadService}, {provide: MyInfoPerService, useClass: MyInfoPerService}, {provide: Rfcservice, useClass: Rfcservice}, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
