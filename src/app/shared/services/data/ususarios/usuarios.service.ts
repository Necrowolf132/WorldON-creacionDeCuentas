import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {BlockchainXemService} from '../../manejador-Blockchain/blockchain-xem.service';


interface NombreUser {
    nombres: string;
    apellidos: string;
}
export interface DataUser {
    nombreCompleto: NombreUser;
    keys: object;
    direccion: string;
    correo: string;
    alias: string;
    SecionPrimeraVes: boolean;
    Verificado: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
    public DatosUsuarioActual: DataUser;
  constructor(private BD: AngularFirestore, private MySDKnem: BlockchainXemService) {

  }
  public addUser(correo: string, UserInfo: object): Promise<DataUser|boolean> {
      const ObjetoKeys = this.MySDKnem.InicioCrearclaves();
      this.DatosUsuarioActual = {
                          nombreCompleto: {
                          nombres: UserInfo['Nombre'],
                          apellidos: UserInfo['Apellido']
                        },
                          keys: ObjetoKeys,
                          direccion: this.MySDKnem.generarDireccion(ObjetoKeys['ClavePublica']),
                          correo: UserInfo['email'],
                          alias: UserInfo['Alias'],
                          SecionPrimeraVes: true,
                          Verificado: false
                        };
      return this.BD.collection('User').doc(correo).set(this.DatosUsuarioActual).then(() => {
            return this.DatosUsuarioActual;
      }, () => {
           return false;
          }).catch((error) => {
              console.log('el error de BD', error);
              return false;
      });
  }
    public buscarDataUserActual(email: string): Promise<boolean> {
      const XX = this.BD.collection('User').doc(email).ref;
      return XX.get().then(doc => {
          if (!doc.exists) {
              console.log('No such document!');
              return false;
          } else {
              const Valores = doc.data();
              this.DatosUsuarioActual = {
                  nombreCompleto: Valores['nombreCompleto'],
                  keys: Valores['keys'],
                  direccion: Valores['direccion'],
                  correo: Valores['correo'],
                  alias: Valores['alias'],
                  SecionPrimeraVes: Valores['SecionPrimeraVes'],
                  Verificado: Valores['Verificado']
              };
              return true;

          }
          }).catch(err => {
          console.log('Error getting document', err);
          return false;
      });
    }
    public returnDataUser(): DataUser {
      return this.DatosUsuarioActual;
    }
}
