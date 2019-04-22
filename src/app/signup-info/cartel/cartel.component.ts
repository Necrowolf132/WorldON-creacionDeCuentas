import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';
import {UsuariosService, DataUser} from '../../shared/services/data/ususarios/usuarios.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-cartel',
  templateUrl: './cartel.component.html',
  styleUrls: ['./cartel.component.scss'],
  animations: [routerTransition()]
})
export class CartelComponent implements OnInit {
    EnvioDataUserRegistro: Observable<any>;
    enviador = new Subject();
    DataUserRegistro: DataUser;
  constructor(private UserData: UsuariosService ) { }

  ngOnInit() {
      /*const traerUser = this.UserData.buscarDataUserActual('manjou132@gmail.com');
      traerUser.then((Success) => {
          console.log('lo que llego hasta aca', Success);
          if (Success) {
              this.DataUserRegistro = this.UserData.returnDataUser();
              console.log('como deberia quedar', this.DataUserRegistro);
          } else {

          }
      });*/
      this.DataUserRegistro = this.UserData.returnDataUser();
      this.EnvioDataUserRegistro = this.enviador.asObservable();
  }
  public EnvioDataUser() {
    this.enviador.next(this.DataUserRegistro);
  }

  onSubmit() {

  }

}
