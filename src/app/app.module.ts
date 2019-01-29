import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router'
import {FormsModule}from '@angular/forms'
import{HttpClientModule} from '@angular/common/http'
import {CommonModule} from '@angular/common'

import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { ViewComponent } from './ui/view/view.component';
import { UpdateComponent } from './ui/update/update.component';


const routes : Routes =[
  {path: '',redirectTo:'view',pathMatch:'full'},
  {path:'add', component: AddComponent },
  {path: 'update/:id', component:UpdateComponent},
  {path : 'view',component:ViewComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  exports:[
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
