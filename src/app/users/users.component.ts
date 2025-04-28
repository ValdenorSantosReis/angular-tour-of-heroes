import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  // users: Nome do usuárioString[] = ['Vinicius', 'Julio', 'Larissa', 'Valdenor','Maria']
    userSelecionado: User | undefined;
    
  users: User[] = [
      {
        nome: 'Vinicius',
        idade: 25
      },
      {
        nome: 'Julio',
        idade: 26
      },
      {
        nome: 'Larissa',
        idade: 27
      },
      {
        nome: 'Valdenor',
        idade: 28
      },
      {
        nome: 'Marcia',
        idade: 32
      },
      {
        nome: 'Maria',
        idade: 29
      }    
    ];

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
  };
}
