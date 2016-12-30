import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
import { Usuario } from '../usuario/usuario.model';

@Component({
  selector: 'dml-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected notificationService: NotificationService) {
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
