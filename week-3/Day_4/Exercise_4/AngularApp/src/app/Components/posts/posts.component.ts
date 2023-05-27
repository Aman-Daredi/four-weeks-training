import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonPlaceholderAPIService } from 'src/app/Services/json-placeholder-api.service';
import {Post} from "./post"
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts$?: Observable<Post[]>;

  constructor(private postService: JsonPlaceholderAPIService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts$ = this.postService.getPosts();
  }

  createPost() {
    const newPost = { title: 'Aman Daredi', body: 'Lorem ipsum'};
    this.postService.createPost(newPost).subscribe(posts => {
      console.log("new post created");
      this.getPosts();
    });
  }

  updatePost(postId: number) {
    const updatedPost = { title: 'Updated Post', body: 'Lorem ipsum dolor sit amet' };
    this.postService.updatePost(postId, updatedPost).subscribe(updated => {
      console.log('Post updated:', updated);
      // Refresh the list of posts
      this.getPosts();
    });
  }

  deletePost(postId: number) {
    this.postService.deletePost(postId).subscribe(posts => {
      console.log("post deleted");
      this.getPosts();
    })
  }
  
}
