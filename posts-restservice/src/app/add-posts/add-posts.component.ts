import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  constructor(private postsService:PostserviceService) { }

  ngOnInit() {
  }

  postsObject : Object ={};
  isSucess: boolean =false;

  newPostsFormHandler(){
    console.log("from form" +this.postsObject);

    this.postsService.create(this.postsObject)
    .subscribe( (savedPostDetail : any) => {
        console.log("http post respnse" +savedPostDetail);
      if(savedPostDetail && savedPostDetail.title){
        console.log( "isSuccess" + this.isSucess);
        this.isSucess = true;
      } else{
        console.log( "isSuccess" + this.isSucess);
        this.isSucess = false;
      }
    }
    );

  }

}
