import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postslist : Object [];

  constructor(private postService: PostserviceService) { }

  ngOnInit() {
    this.postService.read().subscribe(
        (info : any) => {
          this.postslist = info;
        }
    );
    

  }

}
