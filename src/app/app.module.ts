import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { NavComponent } from './components/nav/nav.component';

import { RouterModule, Routes } from '@angular/router';


var routes: Routes = [
  {path: "", pathMatch: "full", component: PageHomeComponent},
  {path: "about", component: PageAboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    NavComponent,
    PageAboutComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
