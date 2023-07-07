import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private http: HttpClient) { }

// retrieving all data posts 

getPostDetails(pgnum:any){

  return this.http.get(`http://192.168.2.6:4000/post?limit=8&pageNumber=${pgnum}`)
}


// retieving all comments

getcommentsfull(id:any,pagenumber:any){
  return this.http.get(`http://192.168.2.6:4000/comments/${id}?limit=10&pageNumber=${pagenumber}`)
}

// retrieving all comments

getrepliesfull(commentid:any,pagenumber:any){

  return this.http.get(`http://192.168.2.6:4000/replies/${commentid}?limit=10&pageNumber=${pagenumber}`)
}

// posting comment TO DB

postComment(post_id:any,comment:string){
let username=localStorage.getItem('user')
  let body={
    "comments": comment,
    "likes": 0,
    "user_email":username
  }

  console.log(body,post_id);
  
  return this.http.post(`http://192.168.2.6:4000/comment?post_id=${post_id}`,body)
}


postReply(comments_id:any,reply:string,replyname:any){
  let username=localStorage.getItem('user')
    let body={
      comments_id,
      "reply": reply,
      "likes": 0,
      "user_email": username,
      "showreplybutton": true,
      replyname
    }
  
   console.log(body);
   
    
    return this.http.post("http://192.168.2.6:4000/replies",body)
  }
  

  postCreate(body:any){
    return this.http.post("http://192.168.2.6:4000/post",body)
  }


}
