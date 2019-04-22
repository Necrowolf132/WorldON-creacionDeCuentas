import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {NotificationsService} from '../notifications/notifications.service';
import {DataUser, UsuariosService} from '../data/ususarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ManejadorDeUsuariosService {
  creacionPositiva: boolean;
  constructor(public CreadorUser: AngularFireAuth, public avisos: NotificationsService, private conectionDBuser: UsuariosService) { }

  public crearUser(email: string, pass: string, Userinfo: object): Promise<boolean|void|DataUser> {
      return this.CreadorUser.auth.createUserWithEmailAndPassword(email, pass).then(
          (loqueSea) => {
              console.log('cree un usuario y es lo que sea', loqueSea);
              if (loqueSea !== undefined) {
                  console.log('User creado -->', loqueSea.user);
                  const DBuserConect: Promise<DataUser|boolean> = this.conectionDBuser.addUser(Userinfo['email'], Userinfo).then();
                  const DebolucionCreacion: Promise<DataUser|boolean> = DBuserConect.then((RespuestaDB: DataUser|boolean) => {
                      console.log('esta respuesta de base de datos', RespuestaDB);
                      if (RespuestaDB !== false) {
                          return RespuestaDB;
                      } else {
                          loqueSea.user.delete();
                          return false;
                      }
                  });
                  return DebolucionCreacion;
              } else {
                  return false;
              }
          }
      ).catch((error) => {
          console.log('este es el error', error );
          if (error.code === 'auth/email-already-in-use') {
              this.avisos.showNotification(4, 'Este email ya esta siendo utilizado por un usuario');
          } else if (error.code === 'auth/invalid-email') {
              this.avisos.showNotification(4, 'Este email no es un email valido');
          } else if (error.code === 'auth/operation-not-allowed') {
              this.avisos.showNotification(4, 'Este operacion no esta soportada');
          } else if (error.code === 'auth/weak-password') {
              this.avisos.showNotification(4, 'La contraseña es muy debil, utilice una mas fuerte');
          } else if (error.code === 'auth/network-request-failed') {
              this.avisos.showNotification(4, 'Sin conexion con el Servidor');
          } else  {
              this.avisos.showNotification(4, 'No se obtuvo respuesta');
          }
          return false;
      });
  }
}
