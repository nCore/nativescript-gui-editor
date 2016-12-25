import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GuiEditorComponent } from './gui-editor/gui-editor.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: 'gui-editor', component: GuiEditorComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule( {
  declarations: [
    AppComponent,
    GuiEditorComponent,

    MenuComponent
  ],
  imports:      [
    RouterModule.forRoot( appRoutes ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers:    [],
  bootstrap:    [
    AppComponent,
    MenuComponent
  ]
} )
export class AppModule {
}
