import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from   'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http:Http) { }

  create(postObject){
    return this.http.post("https://jsonplaceholder.typicode.com/posts",postObject)
    .pipe( map ( response => {
      console.log(response);
      return response.json();
    }
    ));
    
  }

  read(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    .pipe( map(response => {
        console.log(response);
        return response.json();
    } 
    ));
  }

  getPostsById(id){
    return this.http.get("https://jsonplaceholder.typicode.com/posts/"+ id).
    pipe( map( response => {
      console.log(response);
        return response.json();
    } 
    )
    );
  }

  delete(id){
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/"+ id).
    pipe( map( response => {
      console.log(response);
      return response.json();
    }
    ));
  }

  update(postObject){
      return this.http.put( "https://jsonplaceholder.typicode.com/posts/"+ postObject.id, postObject).
      pipe( map( response => {
        console.log(response);
        return response.json();
      
      }
      )
      );
  }
}
