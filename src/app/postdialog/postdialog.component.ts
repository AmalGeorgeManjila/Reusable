import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { PostsServiceService } from '../landingpage/posts/posts-service.service';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-postdialog',
  templateUrl: './postdialog.component.html',
  styleUrls: ['./postdialog.component.css']
})
export class PostdialogComponent {
  tagarray:any=[];
  newTag:any='';

  constructor(private fb: FormBuilder,private dialogRef:MatDialogRef<PostdialogComponent>,private ps:PostsServiceService,
    private lout:LogoutService){

  }

Createpost=this.fb.group(
  {
    title:['',Validators.required],
    tags:['',Validators.required],
    content:['',Validators.required],
    community:['',Validators.required]
  }
)
  closedialog(){
this.dialogRef.close();

  }

addtags()
{
  if(!this.tagarray.includes(this.Createpost.value.tags?.trim())&& this.tagarray.length<5){
this.tagarray.push(this.Createpost.value.tags)
console.log(this.tagarray);
this.Createpost.patchValue({tags:''})

}
}
submitPost(){
 const created_at=new Date();
 const usermail=localStorage.getItem('usermail')
 const username=localStorage.getItem('username')
  const body={
    "created_at": created_at,
    "content": this.Createpost.value.content,
    "team": "string",
    "name": username,
    "tags":  this.tagarray
    ,
    "showfull": true,
    "viewallComments": true,
    "fullcomment": 0,
    "likes": 0,
    "owner_email":usermail ,
    "community":  this.Createpost.value.community
  }
  this.ps.postCreate(body).subscribe((data:any)=>{
    console.log(data);
    
  });
  this.Createpost.reset;
  this.tagarray=[];
  // this.ps.getPostDetails;
    // console.log(body);

    this.closedialog()
}
}
