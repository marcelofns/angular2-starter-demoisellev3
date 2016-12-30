import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioEditComponent } from './usuario-edit.component';
import { AuthGuard } from '@demoiselle/security';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'usuario',
                data: ['Usuário'],
                //canActivate: [AuthGuard],
                component: UsuarioComponent
            },

            // edição de usuário
            {
                path: 'usuario/edit/:id',
                //canActivate: [AuthGuard],
                component: UsuarioEditComponent
            },

            // novo usuário
            {
                path: 'usuario/edit',
                canActivate: [AuthGuard],
                component: UsuarioEditComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }