import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private HomeService:HomeService, private router:Router) { }

  allPosts:object=[];

  ngOnInit() {
    this.HomeService.getPosts().subscribe(
      allPosts=>this.allPosts=allPosts,
      error=>console.log(error.message),
      ()=>{}
    )
  }

  gotoPost(id){
    this.router.navigate(['/post',id])
  }

}
