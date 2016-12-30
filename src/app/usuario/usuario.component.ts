import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { NotificationService } from '../shared';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'dml-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']

})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario[];

  @ViewChild('staticModal') public staticModal: ModalDirective;

  public itemsPerPage: number = 10;
  public totalItems: number = 0;
  public currentPage: number = 1;


  constructor(private service: UsuarioService, private notificationService: NotificationService) {
  }


  ngOnInit() {
        this.list();
  }

  showModalDetails(usuario: Usuario) {
    this.usuario = usuario;
    this.staticModal.show();
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.list();
  }



  list() {
    this.service.list(this.currentPage, this.itemsPerPage).subscribe(
      result => {
        this.totalItems = 20; // backend must send  the total items for proper pagination config
        this.usuarios = result;

      },
      error => {
        this.notificationService.error('Não foi possível carregar a lista de usuarios!');
        this.totalItems = 20;
        this.usuarios = error;
      }
    );
  }


  delete(usuario: Usuario) {
    this.service.delete(usuario).subscribe(
      () => {
        this.usuario = null;
        this.staticModal.hide();
        this.list();
      },
      error => {
        this.notificationService.error('Não foi possível remover o usuário!');
      }
    );



  }

}
