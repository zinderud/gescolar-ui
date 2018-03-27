import { ProfessorService } from './../professores/professor.service';

import { GrowMessageService } from './../shared/grow-message.service';

import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { JwtHelper } from 'angular2-jwt';

import { AuthService } from './../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

import {  GrowlModule } from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    GrowlModule,

    ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  providers: [
    ErrorHandlerService,
    AuthService,
    ConfirmationService,
    ProfessorService,
    GrowMessageService,
    JwtHelper,
    Title,
    MessageService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }