import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }

  getBlogById(id:number) {
    let url = "https://jsonplaceholder.typicode.com/posts/" + id;
    return this.http.get(url);
  }

  getCommentsByBlogId(id:number) {
    let url = "https://jsonplaceholder.typicode.com/comments?postId=" + id;
    return this.http.get(url);
  }
}
