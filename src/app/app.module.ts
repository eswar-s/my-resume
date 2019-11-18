import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
