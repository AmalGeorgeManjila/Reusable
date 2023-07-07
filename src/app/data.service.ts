import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }



login(){
  const usermail=localStorage.getItem('usermail');
  const firstname = localStorage.getItem('firstname');
  const lastname =  localStorage.getItem('lastname');
  
  alert(firstname)

  const body={
    "firstName": firstname,
    "lastName": lastname,
    "email": usermail
  }
  this.http.post('http://192.168.2.6:4000/signup',body)
  alert(usermail )
}


}
