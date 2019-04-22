import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {routerTransition} from '../router.animations';
import {NotificationsService} from '../shared/services/notifications/notifications.service';
import {AuthService} from '../shared/services/Auth/auth.service';

declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    ParametrosLogin = {
        Username: '',
        password: ''
    };
    constructor(public router: Router, private Autenticador: AuthService , private myalerta: NotificationsService) {}

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
        if (this.ParametrosLogin.Username === '' || this.ParametrosLogin.password === '' || this.ParametrosLogin.Username === null || this.ParametrosLogin.password === null) {
            this.myalerta.showNotification(4, 'Asegurese de no dejar ningun campo en blanco');
        } else {
            this.Autenticador.InicioDesesion(this.ParametrosLogin.Username, this.ParametrosLogin.password);
        }
    }
}
