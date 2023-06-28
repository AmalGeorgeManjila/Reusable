import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private http: HttpClient) { }


getPostDetails(){

  return this.http.get('http://192.168.2.6:4000/post?limit=10&pageNumber=0')
}


}
