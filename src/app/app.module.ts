import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ButtonComponent } from './button/button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, ButtonComponent, EditButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
