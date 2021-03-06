import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@demoiselle/security';
import { NotificationService } from '../shared';
import { LoginService } from './login.service';

@Component({
  selector: 'dml-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user: any = {
    username: 'admin@demoiselle.org',
    password: '123456'

  };

  constructor(protected authService: AuthService,
    protected router: Router,
    protected notificationService: NotificationService, 
    protected loginService: LoginService){ }

  ngOnInit() {
    
  }

/**
 * login
 */
  login(){
      this.authService.login(this.user)
      .subscribe(
        res => {
          this.loginService.proceedToRedirect(['']);
        },
        error => {
          if(error.status == 401 || error.status == 406) {
            let message = JSON.parse(error._body).error;
            this.notificationService.error(message);
            this.user.password = "";
          };
        }
      );
  }

}
