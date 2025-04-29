import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../models/hero';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  userSelecionado: User | any;
  userForm: FormGroup = new FormGroup({}); 
  constructor(private fb: FormBuilder, private userService: UserService) { }
  
  ngOnInit(): void {
    this.initilizeForm();  
  }

  initilizeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(110)]],
      
      })
    }

  submitForm() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset
    }
  }
  
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
    this.userService.setUser(user);
  };
}
