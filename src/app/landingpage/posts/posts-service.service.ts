import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private http: HttpClient) { }

// retrieving all data posts 

getPostDetails(){

  return this.http.get('http://192.168.2.6:4000/post?limit=10&pageNumber=0')
}


// retieving all comments

getcommentsfull(id:any,pagenumber:any){
  return this.http.get(`http://192.168.2.6:4000/comments/${id}?limit=10&pageNumber=${pagenumber}`)
}

// retrieving all comments

getrepliesfull(commentid:any,pagenumber:any){

  return this.http.get(`http://192.168.2.6:4000/replies/${commentid}?limit=10&pageNumber=${pagenumber}`)
}

}
