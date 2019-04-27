import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postsObject : {};
  postId : Number ;
  editablePostsObj : Object=  {};
  isDeleted : boolean ;
  isUpdated : boolean;

  constructor(private postsServe:PostserviceService, private activeRoute:ActivatedRoute, private router: Router ) {
    this.activeRoute.params.subscribe(
      info => { 
        this.postId = Number(info.id) ;
        console.log(this.postId);
      }
    );
   }

  ngOnInit() {

    this.postsServe.getPostsById(this.postId)
    .subscribe( (info :any )=> {
        this.postsObject = info;
    }
    );
  }

  editPostsHandler(){
    $("#editPostsModal").modal('show');
    this.editablePostsObj = {
      id : this.postsObject['id'],
      title : this.postsObject['title'],
      body : this.postsObject['body']
    }    
  }

  deletePostsHandler(id){
      this.postsServe.delete(id).subscribe(
          status => {
            console.log(status);
              this.isDeleted = true;

              setTimeout( () =>{
                  this.router.navigate(['posts'])
              }, 3000 );
          }
      );
  }


  updatePosts(){
    this.postsServe.update(this.editablePostsObj).
    subscribe( status => {
      console.log(status);
      this.isUpdated = true;

      setTimeout(()=>{
        $("#editPostsModal").modal('hide');
        this.router.navigate(['posts', this.postId]);
      },3000);
      
    }
    
    );
  }

}
