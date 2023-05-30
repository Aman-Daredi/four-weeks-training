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
}
