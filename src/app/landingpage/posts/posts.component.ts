import { Component, Injectable, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostsServiceService } from './posts-service.service';
import { compileComponentFromMetadata } from '@angular/compiler';
import { FeedserviceService } from '../feedservice.service';
import { Observable } from 'rxjs';
import { LogoutService } from 'src/app/logout.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

@Injectable({
  providedIn:'root'
})
export class PostsComponent implements OnInit {
  CommentForm = this.fb.group(
    {
      comment: ['']
    }
  )

  replyForm = this.fb.group(
    {
      reply: ['']
    }
  )

  differenceindate:any;
  date:any;
  height_of_the_page:any;
  current_page_height:any;
  commentfromuser:any;
  replyfromuser:any;

  booleanObservable: Observable<boolean>=this.feedservice.nextfeedset$;

pgnum:any=0;


  constructor(
    private lout:LogoutService,
    private fb: FormBuilder,
    private postservice:PostsServiceService,
    private renderer:Renderer2,
    private feedservice:FeedserviceService) { }

 
  posts:any=[];

  ngOnInit(): void {
    this.subscribeToBooleanObservable();
    
   
    this.getFeedsandPost(this.pgnum);

    for(let i=0;i<this.posts.length;i++){
      console.log(this.posts[i].fullcomment);
      
    }

    

    // scrolling

    // const divElement = document.getElementById('feed'); // or use ViewChild to get the reference
    // if (divElement) {
    //   this.renderer.listen(divElement, 'scrollend', (event) => {
    //     // Handle scroll event here
    //     console.log('Div scrolled');
    //   });
    // }


  

  }


 
  // posts: any = [{
  //   "name": "Louis",
  //   "team": "TNP France",
  //   "time": 12,
  //   "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au",
  //   "tags": ["Tnp", "france", "hope"],
  //   "likes": 9,
  //   "viewallcomments": false,
  //   "fullcomment": 1,
  //   "comments": [
  //     {
  //       "comment": "comme loremkn asjdhashda jahsdjg asdja kshjkgasjagsas  asbfhags ahygshasaka agfiagifsdfs nt1",
  //       "commentname": "george",
  //       "likes": 12,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "sonu", "replyliked": false, "likes": 22, "showreplybutton": false, }, { "reply": "ddg", "replyname": "angel", "replyliked": false, "likes": 5 }, { "reply": "assghhj", "replyname": "henson", "replyliked": false, "likes": 14 }]
  //     },
  //     {
  //       "comment": "comment2",
  //       "commentname": "amal",
  //       "likes": 342,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "john", "replyliked": false, "likes": 21, "showreplybutton": false }]

  //     },
  //     {
  //       "comment": "commasd asd asent3",
  //       "commentname": "jassim",
  //       "likes": 152,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "e2342fd", "replyname": "vyshnav", "replyliked": false, "likes": 9, "showreplybutton": false }, { "reply": "rt", "replyname": "popeye", "replyliked": false, "likes": 7, "showreplybutton": false }]
  //     },

  //     {
  //       "comment": "commsdsaa asnbdasa havsja ent4",
  //       "commentname": "johith",
  //       "likes": 132,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "asd", "replyname": "mathew", "replyliked": false, "likes": 16, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "comm ahsdhasd ahsdhasdiasbc asbyagsa agyiasbhaent5",
  //       "commentname": "grace",
  //       "likes": 112,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "fsdfsd", "replyname": "athira", "replyliked": false, "likes": 3, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "com scasdasa asdasdas asasafa ment6",
  //       "commentname": "alan",
  //       "likes": 2,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "oooppksbhjcvsdf", "replyname": "sandeep", "replyliked": false, "likes": 1, "showreplybutton": false }]
  //     }
  //   ],
  //   "showFull": false,
  //   "liked": false
  // },
  // {
  //   "name": "Raghav",
  //   "team": "TNP Digital",
  //   "time": 9,
  //   "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au",
  //   "tags": ["Tnp", "digital", "victory"],
  //   "likes": 101,
  //   "viewallcomments": false,
  //   "fullcomment": 1,
  //   "comments": [
  //     {
  //       "comment": "comment1",
  //       "commentname": "george",
  //       "likes": 123,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "sonu", "replyliked": false, "likes": 14, "showreplybutton": false }, { "reply": "ddg", "replyname": "angel", "replyliked": false, "likes": 8, "showreplybutton": false }, { "reply": "assghhj", "replyname": "henson", "replyliked": false, "likes": 23, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "comment2",
  //       "commentname": "amal",
  //       "likes": 412,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "john", "replyliked": false, "likes": 76, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "commasd asd asent3",
  //       "commentname": "jassim",
  //       "likes": 1,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "e2342fd", "replyname": "vyshnav", "replyliked": false, "likes": 11, "showreplybutton": false }, { "reply": "rt", "replyname": "popeye", "replyliked": false, "likes": 29, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "commsdsaa asnbdasa havsja ent4",
  //       "commentname": "johith",
  //       "likes": 15,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "asd", "replyname": "mathew", "replyliked": false, "likes": 15, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "comm ahsdhasd ahsdhasdiasbc asbyagsa agyiasbhaent5",
  //       "commentname": "grace",
  //       "likes": 7,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "fsdfsd", "replyname": "athira", "replyliked": false, "likes": 18, "showreplybutton": false }]
  //     }
  //   ],
  //   "showFull": false,
  //   "liked": false
  // },
  // {
  //   "name": "amal",
  //   "team": "TNP London",
  //   "time": 3,
  //   "content": "hope you all are fine and happ,gdygwydjwdbwduw, Pellentesque sit amet sapien fringilla, mattis ligula consectetur,ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au",
  //   "tags": ["Tnp", "Londan", "peace"],
  //   "likes": 80,
  //   "viewallcomments": false,
  //   "fullcomment": 1,
  //   "comments": [
  //     {
  //       "comment": "comment1",
  //       "commentname": "george",
  //       "likes": 19,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "sonu", "replyliked": false, "likes": 1, "showreplybutton": false }, { "reply": "ddg", "replyname": "angel", "replyliked": false, "likes": 3, "showreplybutton": false }, { "reply": "assghhj", "replyname": "henson", "replyliked": false, "likes": 9, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "comment2",
  //       "commentname": "amal",
  //       "likes": 512,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "john", "replyliked": false, "likes": 47, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "commasd asd asent3",
  //       "commentname": "jassim",
  //       "likes": 2,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "e2342fd", "replyname": "vyshnav", "replyliked": false, "likes": 5, "showreplybutton": false }, { "reply": "rt", "replyname": "popeye", "replyliked": false, "likes": 19, "showreplybutton": false }]
  //     }
  //   ],
  //   "showFull": false,
  //   "liked": false
  // },
  // {
  //   "name": "Neil",
  //   "team": "TNP America",
  //   "time": 3,
  //   "content": "hope you all are fine and happ,gdygwydjwdbwduw, Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au.rssaacvdcvsgajgcvsgvctsvcsgvcagvvxvfsio",
  //   "tags": ["America", "hope", "peace"],
  //   "likes": 70,
  //   "viewallcomments": false,
  //   "fullcomment": 1,
  //   "comments": [
  //     {
  //       "comment": "comment1",
  //       "commentname": "george",
  //       "likes": 2,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "sonu", "replyliked": false, "likes": 34, "showreplybutton": false }, { "reply": "ddg", "replyname": "angel", "replyliked": false, "likes": 44, "showreplybutton": false }, { "reply": "assghhj", "replyname": "henson", "replyliked": false, "likes": 2, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "comment2",
  //       "commentname": "amal",
  //       "likes": 42,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "john", "replyliked": false, "likes": 9, "showreplybutton": false }]
  //     }
  //   ],
  //   "showFull": false,
  //   "liked": false
  // },
  // {
  //   "name": "John",
  //   "team": "Data Science",
  //   "time": 3,
  //   "content": "Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au.rssaacvdcvsgajgcvsgvctsvcsgvcagvvxvfsio",
  //   "tags": ["data", "tnp", "peace"],
  //   "likes": 100,
  //   "viewallcomments": false,
  //   "fullcomment": 1,
  //   "comments": [
  //     {
  //       "comment": "comment1",
  //       "commentname": "george",
  //       "likes": 125,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "sonu", "replyliked": false, "likes": 54, "showreplybutton": false }, { "reply": "ddg", "replyname": "angel", "replyliked": false, "likes": 15, "showreplybutton": false }, { "reply": "assghhj", "replyname": "henson", "replyliked": false, "likes": 25, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "comment2",
  //       "commentname": "amal",
  //       "likes": 912,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "john", "replyliked": false, "likes": 76, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "commasd asd asent3",
  //       "commentname": "jassim",
  //       "likes": 182,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "e2342fd", "replyname": "vyshnav", "replyliked": false, "likes": 15, "showreplybutton": false }, { "reply": "rt", "replyname": "popeye", "replyliked": false, "likes": 21, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "commsdsaa asnbdasa havsja ent4",
  //       "commentname": "johith",
  //       "likes": 52,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "asd", "replyname": "mathew", "replyliked": false, "likes": 4, "showreplybutton": false }]
  //     },
  //     {
  //       "comment": "comm ahsdhasd ahsdhasdiasbc asbyagsa agyiasbhaent5",
  //       "commentname": "grace",
  //       "likes": 77,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "fsdfsd", "replyname": "athira", "replyliked": false, "likes": 15, "showreplybutton": false, }]
  //     }
  //   ],
  //   "showFull": false,
  //   "liked": false
  // },
  // {
  //   "name": "Jerry",
  //   "team": "TNP Football",
  //   "time": 3,
  //   "content": "Vestibulum au.rssaacvdcvsgajgcvsgvctsvcsgvcagvvxvfsio,Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. ",
  //   "tags": ["goal", "heart", "win"],
  //   "likes": 500,
  //   "viewallcomments": false,
  //   "fullcomment": 1,
  //   "comments": [
  //     {
  //       "comment": "comment1",
  //       "commentname": "george",
  //       "likes": 44,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "sonu", "replyliked": false, "likes": 2, "showreplybutton": false, }, { "reply": "ddg", "replyname": "angel", "replyliked": false, "likes": 9, "showreplybutton": false, }, { "reply": "assghhj", "replyname": "henson", "replyliked": false, "likes": 12, "showreplybutton": false, }]
  //     },
  //     {
  //       "comment": "comment2",
  //       "commentname": "amal",
  //       "likes": 69,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "adfasdf", "replyname": "john", "replyliked": false, "likes": 17, "showreplybutton": false, }]
  //     },
  //     {
  //       "comment": "commasd asd asent3",
  //       "commentname": "jassim",
  //       "likes": 35,
  //       "commentliked": false,
  //       "fullreply": 1,
  //       "showreplybutton": false,
  //       "replys": [{ "reply": "e2342fd", "replyname": "vyshnav", "replyliked": false, "likes": 1, "showreplybutton": false, }, { "reply": "rt", "replyname": "popeye", "replyliked": false, "likes": 5, "showreplybutton": false, }]

  //     },
  //     {

  //       "comment": "commsdsaa asnbdasa havsja ent4",

  //       "commentname": "johith",

  //       "likes": 87,

  //       "commentliked": false,

  //       "fullreply": 1,
  //       "showreplybutton": false,

  //       "replys": [{ "reply": "asd", "replyname": "mathew", "replyliked": false, "likes": 33, "showreplybutton": false, }]

  //     }


  //   ],
  //   "showFull": false,
  //   "liked": false

  // }]


  // timeUpdation(postedtime:any){

  //   const date1 = new Date();
  //   const date2 = new Date(postedtime);
    
  //   // Calculate the difference in milliseconds
  //   const differenceInDay = date2.getDay() - date1.getDay();
    
  //   // Convert milliseconds to days
  //   const differenceInDays = differenceInDay / (1000 * 60 * 60 * 24);
    
  // return differenceInDay
  // }


  


  likeFunction(i: any) {
    this.posts[i].liked = !this.posts[i].liked,
      this.posts[i].liked ? this.posts[i].likes += 1 : this.posts[i].likes -= 1;
  }


  CommentlikeFunction(i: any, commentno: any) {
    this.posts[i].comments[commentno].commentliked = !this.posts[i].comments[commentno].commentliked,
      this.posts[i].comments[commentno].commentliked ? this.posts[i].comments[commentno].likes += 1 : this.posts[i].comments[commentno].likes -= 1;
  }


  replylikeFunction(i: any, commentno: any, replyno: any) {
    this.posts[i].comments[commentno].replys[replyno].replyliked = !this.posts[i].comments[commentno].replys[replyno].replyliked,
      this.posts[i].comments[commentno].replys[replyno].replyliked ? this.posts[i].comments[commentno].replys[replyno].likes += 1 : this.posts[i].comments[commentno].replys[replyno].likes -= 1;
  }

  random(): number {
    // console.log(Math.ceil(Math.random()*10));
    return Math.floor((Math.random() * 10) / 2);


  }



  submitComment(postno: any) {


    this.commentfromuser=this.CommentForm.value.comment;


console.log(this.commentfromuser,postno);
this.postservice.postComment(postno,this.commentfromuser).subscribe((data:any)=>
console.log(data)
);

    this.CommentForm.reset()
    

  }

  submitReply(comments_id:any,replyname?:string) {
 

     this.replyfromuser= this.replyForm.value.reply,
      this.postservice.postReply(comments_id,this.replyfromuser,replyname).subscribe((data:any)=>
      console.log(data)
      )

    this.replyForm.reset()


  }


  getFeedsandPost(pgnum:any){

     this.postservice.getPostDetails(pgnum).subscribe((data:any)=>{


      
      for(let d=0;d<data.length;d++){
this.posts.push(data[d])
      }
      console.log(this.posts);
      
      this.posts.map((post:any)=>post['pagenumber']=-1);
      this.posts.map((post:any)=>post.comments.map((comment:any)=>comment['pagenumber']=-1));
      // console.log(this.posts);
    })

   
    
  }



 

  // retrieving all comments

  getcommentsfull(i:any){
    
    // this.posts.filter((post:any)=>post.postdetails.id==i)[0]['pagenumber']=this.pagenumber;
    this.posts.filter((post:any)=>post.postdetails.id==i)[0]['pagenumber']+=1;
 this.postservice.getcommentsfull(i,  this.posts.filter((post:any)=>post.postdetails.id==i)[0]['pagenumber']).subscribe((data:any)=>{
  for( var d=0;d<data.length;d++){
  console.log(this.posts.postdetails);
  
    
    this.posts.filter((post:any)=>post.postdetails.id==i)[0].comments.push(data[d])
    console.log(this.posts.filter((post:any)=>post.postdetails.id==i)[0].comments);
  }

  
 })

  
  }


  // retrieving all replies 


  getrepliesfull(commentid:any){
    this.posts.filter((post:any)=>post.comments.find((data:any)=>data.id===commentid && data.postdetails_id===post.postdetails.id))[0].comments.filter((data:any)=>data.id===commentid)[0]['pagenumber']+=1;
    console.log(this.posts.filter((post:any)=>post.comments.find((data:any)=>data.id===commentid && data.postdetails_id===post.postdetails.id)));
    console.log(commentid);
    
    
    this.postservice.getrepliesfull(commentid,this.posts.filter((post:any)=>post.comments.find((data:any)=>data.id===commentid && data.postdetails_id===post.postdetails.id))[0].comments.filter((data:any)=>data.id===commentid)[0]['pagenumber']).subscribe((data:any)=>{
      for( var d=0;d<data.length;d++){
  
      
        
        this.posts.filter((post:any)=>post.comments.find((data:any)=>data.id===commentid && data.postdetails_id===post.postdetails.id))[0].comments.filter((data:any)=>data.id===commentid)[0].replies.push(data[d])
        
      }
    
      
     })
    

  }


  // srolling feeds pagination
  subscribeToBooleanObservable() {
    this.booleanObservable.subscribe((value: boolean) => {
      if (value == true) {
        console.log("now");
        
        this.pgnum++;
        // Call your method when the Observable emits 'true'
        this.getFeedsandPost(this.pgnum);
      }
    });

   
  }






}
