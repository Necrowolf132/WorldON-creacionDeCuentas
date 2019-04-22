import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {NotificationsService} from '../notifications/notifications.service';
import * as firebase from 'firebase';
import {take, map, tap } from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authState2: any = null;
  constructor(public Autenticacion: AngularFireAuth, public avisos: NotificationsService, public router: Router) {
      this.VerificarAutenticado();
  }

    public VerificarAutenticado() {
        this.Autenticacion.auth.onAuthStateChanged((dato) => {
            if (!dato) {
                this.router.navigate(['/login']);
            }
        });
    }

    get authenticated(): boolean {
        return this.authState2 !== null;
    }
    public InicioDesesion(Email: string, clave: string): string | void {
        let Devolucion = 'No se obtuvo respuesta';
        this.Autenticacion.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            this.Autenticacion.auth.signInWithEmailAndPassword(Email, clave).then((crefdencial) => {
                if (crefdencial.user != null || crefdencial.user !== undefined) {
                    this.router.navigate(['/dashboard']);
                }
            }).catch((error) => {
                console.log('este es el error', error );
                if (error.code === 'auth/invalid-email') {
                    Devolucion = 'Formato de correo Invalido';
                    this.avisos.showNotification(4, Devolucion);
                } else if (error.code === 'auth/user-disabled') {
                    Devolucion = 'Este usuario se encuentra Bloqueado';
                    this.avisos.showNotification(4, Devolucion);
                } else if (error.code === 'auth/user-not-found') {
                    Devolucion = 'Este usuario no se encuentra registrado';
                    this.avisos.showNotification(4, Devolucion);
                } else if (error.code === 'auth/wrong-password') {
                    Devolucion = 'La contraseña no es valida';
                    this.avisos.showNotification(4, Devolucion);
                } else if (error.code === 'auth/network-request-failed') {
                    Devolucion = 'Sin conexion con el Servidor';
                    this.avisos.showNotification(4, Devolucion);
                }
                return Devolucion;
            });
        });

    }
    public cierreDeSecion() {
        this.Autenticacion.auth.signOut().then( () => {
            this.router.navigate(['']);
        }).catch((error) => {
            let Devolucion;
            console.log('este es el error', error );
            if (error.code === 'uth/invalid-user-token') {
                Devolucion = 'No se puede terminar la sesion, debido a que el token del usuario es invalido';
                this.avisos.showNotification(4, Devolucion);
            } else if (error.code === 'auth/user-token-expired') {
                Devolucion = 'El token ha expirado';
                this.avisos.showNotification(4, Devolucion);
            } else if (error.code === 'auth/null-user') {
                Devolucion = 'Este usuario no posee una sesion iniciada!';
                this.avisos.showNotification(4, Devolucion);
            }
        });
    }
    public InformacionDeUsuario(): firebase.User  {
        let Usuario: firebase.User;
        Usuario = this.Autenticacion.auth.currentUser;
        /*if (!Usuario) {
            Usuario['displayName'] = 'Sin Usuario';
            Usuario.email = 'Sin Usuario';
            Usuario.phoneNumber = 'Sin Usuario';
            Usuario.photoURL = 'Sin Usuario';
        }*/
        return Usuario;
    }
}
