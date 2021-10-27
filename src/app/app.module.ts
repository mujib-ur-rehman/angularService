import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeslistComponent } from './heroeslist/heroeslist.component';
import { EditherolistComponent } from './editherolist/editherolist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeroeslistComponent, EditherolistComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
