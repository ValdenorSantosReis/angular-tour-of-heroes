import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'

})
export class HeroService {
 constructor(private MessageService: MessageService) { }

 getHeroes(): Observable<Hero[]>{
  const heroes = of(HEROES);
  this.MessageService.add('HeroService: fetched heroes')
  return heroes;
}


}
