import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { environment } from '../../environments/environment';
import {NotificationsService} from '../shared/services/notifications/notifications.service';
import {ManejadorDeUsuariosService} from '../shared/services/manejadorDeUsuarios/manejador-de-usuarios.service';
import {Tuberia1Service} from '../shared/services/tuberias/tuberia1.service';
import {DataUser} from '../shared/services/data/ususarios/usuarios.service';
declare var $: any;

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public ParametrosRegistro = {
        Terminos: null,
        Alias: '',
        Nombre: '',
        Apellido: '',
        email: '',
        pass: '',
        pass2: ''

    };
    constructor(public router: Router, private myalerta: NotificationsService, private registrar: ManejadorDeUsuariosService) {}

    ngOnInit() {
        $(document).ready(function () {
            $('body').addClass('BodyPrincipal');
            $('.login-page').css({'height': $(window).height()});
            $(window).on('resize', function () {
                $('.login-page').css({'height': $(window).height()});
            });
        });
    }
    onSubmit() {
        const saber: object = this.detectarCampoVacio(this.ParametrosRegistro);
        if (saber['Campovacio']) {
            this.myalerta.showNotification(4, saber['cual']);
        } else {
            if (this.ParametrosRegistro.pass !== this.ParametrosRegistro.pass2) {
                this.myalerta.showNotification(4, 'Asugurese de que los campos de contraseña son iguales');
            } else {
                if (this.ParametrosRegistro.Terminos === null) {
                    this.myalerta.showNotification(4, 'Recuerde que debe aceptar los terminos y condiciones');
                } else {
                    const FireDice = this.registrar.crearUser(this.ParametrosRegistro.email, this.ParametrosRegistro.pass, this.ParametrosRegistro).then();
                    FireDice.then(
                        (Success: DataUser|boolean) => {
                            console.log('se pudo o no se pudo', Success);
                            if (Success !== false && Success !== undefined ) {
                                environment.Registro = true;
                                this.router.navigate(['/signup2']);
                            }
                        }
                    );
                }

            }
        }
    }
    onSubmit2() {
        environment.Registro = true;
        this.router.navigate(['/signup2']);
    }
    private detectarCampoVacio(parametro: object): object {
        let devolucion = { Campovacio: false, cual: ''};
        devolucion.cual = 'El campo ';
        for (let x in parametro) {
            if ( parametro[x] === '' && x !== 'Alias' && x !== 'Terminos' ) {
                if (x === 'pass' ) {
                    devolucion.cual = devolucion.cual + 'password ';
                    devolucion.Campovacio = true;
                    break;
                } else if (x === 'pass2') {
                    devolucion.cual = devolucion.cual + 'confirmacion de password ';
                    devolucion.Campovacio = true;
                    break;
                } else {
                    devolucion.cual = devolucion.cual + x + ' ';
                    devolucion.Campovacio = true;
                    break;
                }
            }
        }
        devolucion.cual = devolucion.cual + 'se encuentra vacio, asegurece de colocar todos los datos no opcionales'
        return devolucion;
    }
}
