import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderAPIService } from 'src/app/Services/json-placeholder-api.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts?: any[];

  constructor(private postService: JsonPlaceholderAPIService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
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
