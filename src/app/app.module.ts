import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MockHeroesComponent } from './mock-heroes/mock-heroes.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BotaoComponent } from './_components/botao/botao.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './_components/user/user.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { UserCardComponent } from './_components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MockHeroesComponent,
    NavbarComponent,
    FooterComponent,
    BotaoComponent,
    UsersComponent,
    UserComponent,
    BaseUiComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
