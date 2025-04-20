import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  exibeMessage: boolean = true; 
  destruir(){
    this.exibeMessage = false;
   }
}
