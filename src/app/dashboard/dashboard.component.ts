import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../_services/hero.service';
import { UserService } from '../_services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  user: User | undefined;

  constructor(private userService: UserService) {
    this.user =  userService.getUser();
  }

  
  
}
