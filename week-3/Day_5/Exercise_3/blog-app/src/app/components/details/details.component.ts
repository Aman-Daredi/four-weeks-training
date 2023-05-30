import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  blogDetails:any = null;
  blogComments:any = null;

  constructor(private route: ActivatedRoute, private blogService: BlogService){}

  ngOnInit(): void {
    
    let id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      console.log(id);
      let realId = Number.parseInt(id);
      this.blogService.getBlogById(realId).subscribe((data) => {
        this.blogDetails = data;
        console.log(this.blogDetails);
      })

      this.blogService.getCommentsByBlogId(realId).subscribe((data) => {
        this.blogComments = data;
      })
    }
    }
}
