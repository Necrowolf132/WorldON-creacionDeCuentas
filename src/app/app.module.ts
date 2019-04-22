import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NotificationsService } from './shared/services/notifications/notifications.service';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {AuthService} from './shared/services/Auth/auth.service';
import {BlockchainXemService} from './shared/services/manejador-Blockchain/blockchain-xem.service';
import {ManejadorDeUsuariosService} from './shared/services/manejadorDeUsuarios/manejador-de-usuarios.service';
import {UsuariosService} from './shared/services/data/ususarios/usuarios.service';
import {Tuberia1Service} from './shared/services/tuberias/tuberia1.service';
import * as Admin from 'firebase-admin';
// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, Tuberia1Service, AngularFireAuth, NotificationsService, AuthService, BlockchainXemService, ManejadorDeUsuariosService, UsuariosService ],
    bootstrap: [AppComponent]
})
export class AppModule {}
