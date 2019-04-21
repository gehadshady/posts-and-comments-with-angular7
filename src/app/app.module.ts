import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './home/post/post.component';
import { PostPageComponent } from './post-page/post-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const appRoutes:Routes = [
  {path:'', component: HomePageComponent},
  {path:'home', component: HomePageComponent},
  {path:'post/:id', component: PostPageComponent},
  {path:'**', component: HomePageComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
