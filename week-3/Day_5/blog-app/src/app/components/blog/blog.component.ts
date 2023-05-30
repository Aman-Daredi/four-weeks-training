import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'First Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Second Blog Post',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    // Add more blog posts as needed
  ];
}