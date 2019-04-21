import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor(private PostService:PostService, private route: ActivatedRoute) { }

  allComments:object=[];


  ngOnInit() {
    this.PostService.getComments(this.route.snapshot.params.id).subscribe(
      allComments=>this.allComments=allComments,
      error=>console.log(error.message),
      ()=>{}
    )
  }

}
