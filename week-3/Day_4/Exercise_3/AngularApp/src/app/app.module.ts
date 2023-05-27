import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './Components/posts/posts.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/parent/child/child.component';
import { BinaryPipe } from './binary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ParentComponent,
    ChildComponent,
    BinaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
