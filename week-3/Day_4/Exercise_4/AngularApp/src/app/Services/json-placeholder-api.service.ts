import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderAPIService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createPost(post: any): Observable<any[]>{
    return this.http.post<any>(this.baseUrl, post);
  }

  updatePost(postId: number, post: any): Observable<any> {
    const url = `${this.baseUrl}/${postId}`;
    return this.http.put<any>(url, post);
  }

  deletePost(postId: number): Observable<any> {
    const url = `${this.baseUrl}/${postId}`;
    return this.http.delete<any>(url);
  }
}
