import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: User | undefined;
  
  @Output() userInfo = new EventEmitter<User>();

  RetornarDados() {
    this.userInfo.emit(
      this.user
    )
  }


  }



