import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../services/Auth/auth.service';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import {AngularFireAuth} from 'angularfire2/auth';
import {take, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( public router: Router, private Sesiones: AuthService, Autenticacion: AngularFireAuth) {

    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.Sesiones.Autenticacion.authState.pipe(
            take(1),
            map(authState => !! authState),
            map(authenticated => {
                console.log('esto es la url', state.url);
                if ( state.url === '' || state.url === '/dashboard') {
                    if ( authenticated === false) {
                        console.log('Autenticado?', authenticated, state.url);
                        this.router.navigate(['/login']);
                    } else {
                        return true;
                    }
                } else if ( state.url === '/login' || state.url === '/signup') {
                    if ( authenticated === true) {
                        console.log('Autenticado?', authenticated);
                        this.router.navigate(['/dashboard']);
                    } else {
                        return true;
                    }
                } else if ( state.url === '/signup2/InfoComponent') {
                    if ( environment.Registro === false) {
                        console.log('no puedes entrar aqui ', environment.Registro);
                        this.router.navigate(['/signup']);
                    } else {
                        return true;
                    }
                }
            }));
    }

}

