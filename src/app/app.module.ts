import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
  {
    path:"",component:SiginComponent
    
  },
  {
    path:"/sigup.component.html",component:SigupComponent
  },
  {
    path:"/dashbord.component.html",component:DashbordComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SigupComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
