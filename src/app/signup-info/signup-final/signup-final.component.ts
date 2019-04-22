import {Component, Input, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {DataUser} from '../../shared/services/data/ususarios/usuarios.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../shared/services/Auth/auth.service';
declare var $: any;
@Component({
  selector: 'app-signup-final',
  templateUrl: './signup-final.component.html',
  styleUrls: ['./signup-final.component.scss'],
  animations: [routerTransition()]
})
export class SignupFinalComponent implements OnInit {
    @Input() public ObservableModal: Observable<DataUser>;
    public DireccionCuenta: string;
    public NombreUser: string;
    public Usuario: string;
    public ClavePublica: string;
  constructor(private sacarSecion: AuthService) { }

  ngOnInit() {
      this.ObservableModal.subscribe((ActiveModal: DataUser) => {
          this.NombreUser = ActiveModal.nombreCompleto.nombres + ' ' + ActiveModal.nombreCompleto.apellidos;
          this.ClavePublica = ActiveModal.keys['ClavePublica'];
          this.Usuario = ActiveModal.correo;
          this.DireccionCuenta = ActiveModal.direccion;
          $('#myModalUserInfo').modal({backdrop: 'static', keyboard: false});
          $('#myModalUserInfo').modal('show');
      });
  }
  public llevarALogin() {
      $('#myModalUserInfo').modal('hide');
      this.sacarSecion.cierreDeSecion();
  }
  onSubmit() {

  }

}
