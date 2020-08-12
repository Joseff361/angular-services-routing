//Imports 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //The js file = component


import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

//Decorator: Is a function that modifies js classes
@NgModule({ // Allow you spcify some details about the module
  //Metadata
  declarations: [ //components, directives and pipes
    AppComponent, MenuComponent, DishdetailComponent
  ],
  imports: [ //third party modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
  //The root Module doesn't have exports
})
//Each module is a class
export class AppModule { }
