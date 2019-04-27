import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddPostsComponent } from './add-posts/add-posts.component';

const APP_ROUTES : Routes = [
 
  { path: 'posts', component: PostsListComponent },
  { path : 'posts/:id', component : PostDetailComponent },
  { path : 'addpost' , component : AddPostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    PostsListComponent,
    PostDetailComponent,
    AddPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
