import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  
  
  post:any=[{

    "name":"Louis" ,
    
    "team":"TNP France",
    
    "time":12,
    
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au",
    
    "tags":["Tnp","france","hope"],
    
    "likes": 9,
    "viewallcomments":false,
    "fullcomment":1,
    
    
    "comments":[
      {
        "comment": "comme loremkn asjdhashda jahsdjg asdja kshjkgasjagsas  asbfhags ahygshasaka agfiagifsdfs nt1",
        "commentname":"george",
        "likes":12,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"sonu","replyliked":false,"likes":22},{"reply":"ddg","replyname":"angel","replyliked":false,"likes":5},{"reply":"assghhj","replyname":"henson","replyliked":false,"likes":14}]
      },
      {
        "comment": "comment2",
        "commentname":"amal",
        "likes":342,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"john","replyliked":false,"likes":21}]
      },
      {
        "comment": "commasd asd asent3",
        "commentname":"jassim",
        "likes":152,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"e2342fd","replyname":"vyshnav","replyliked":false,"likes":9},{"reply":"rt","replyname":"popeye","replyliked":false,"likes":7}]
      },
      {
        "comment": "commsdsaa asnbdasa havsja ent4",
        "commentname":"johith",
        "likes":132,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"asd","replyname":"mathew","replyliked":false,"likes":16}]
      },
      {
        "comment": "comm ahsdhasd ahsdhasdiasbc asbyagsa agyiasbhaent5",
        "commentname":"grace",
        "likes":112,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"fsdfsd","replyname":"athira","replyliked":false,"likes":3}]
      },
      {
        "comment": "com scasdasa asdasdas asasafa ment6",
        "commentname":"alan",
        "likes":2,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"oooppksbhjcvsdf","replyname":"sandeep","replyliked":false,"likes":1}]
      }
      
    ] ,
    "showFull":false,
    "liked":false
    
    
    },
    {
    
    "name":"Raghav" ,
    "team":"TNP Digital",
     "time":9,
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au",
    "tags":["Tnp","digital","victory"],
    "likes": 101,
    "viewallcomments":false,
    "fullcomment":1,
    
    "comments":[
      {
        "comment": "comment1",
        "commentname":"george",
        "likes":123,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"sonu","replyliked":false,"likes":14},{"reply":"ddg","replyname":"angel","replyliked":false,"likes":8},{"reply":"assghhj","replyname":"henson","replyliked":false,"likes":23}]
      },
      {
        "comment": "comment2",
        "commentname":"amal",
        "likes":412,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"john","replyliked":false,"likes":76}]
      },
      {
        "comment": "commasd asd asent3",
        "commentname":"jassim",
        "likes":1,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"e2342fd","replyname":"vyshnav","replyliked":false,"likes":11},{"reply":"rt","replyname":"popeye","replyliked":false,"likes":29}]
      },
      {
        "comment": "commsdsaa asnbdasa havsja ent4",
        "commentname":"johith",
        "likes":15,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"asd","replyname":"mathew","replyliked":false,"likes":15}]
      },
      {
        "comment": "comm ahsdhasd ahsdhasdiasbc asbyagsa agyiasbhaent5",
        "commentname":"grace",
        "likes":7,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"fsdfsd","replyname":"athira","replyliked":false,"likes":18}]
      }
    
    ] ,
    "showFull":false,
    "liked":false
    },
    {
    "name":"amal" ,
    "team":"TNP London",
    "time":3,
    "content": "hope you all are fine and happ,gdygwydjwdbwduw, Pellentesque sit amet sapien fringilla, mattis ligula consectetur,ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au",
    "tags":["Tnp","Londan","peace"],
    "likes": 80,
    "viewallcomments":false,
    "fullcomment":1,
    
    "comments":[
      {
        "comment": "comment1",
        "commentname":"george",
        "likes":19,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"sonu","replyliked":false,"likes":1},{"reply":"ddg","replyname":"angel","replyliked":false,"likes":3},{"reply":"assghhj","replyname":"henson","replyliked":false,"likes":9}]
      },
      {
        "comment": "comment2",
        "commentname":"amal",
        "likes":512,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"john","replyliked":false,"likes":47}]
      },
      {
        "comment": "commasd asd asent3",
        "commentname":"jassim",
        "likes":2,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"e2342fd","replyname":"vyshnav","replyliked":false,"likes":5},{"reply":"rt","replyname":"popeye","replyliked":false,"likes":19}]
      }
      
    ] ,
    "showFull":false,
    "liked":false
    },
    {
    "name":"Neil" ,
    "team":"TNP America",
    "time":3,
    "content": "hope you all are fine and happ,gdygwydjwdbwduw, Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au.rssaacvdcvsgajgcvsgvctsvcsgvcagvvxvfsio",
    "tags":["America","hope","peace"],
    "likes": 70,
    "viewallcomments":false,
    "fullcomment":1,
    
    "comments":[
      {
        "comment": "comment1",
        "commentname":"george",
        "likes":2,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"sonu","replyliked":false,"likes":34},{"reply":"ddg","replyname":"angel","replyliked":false,"likes":44},{"reply":"assghhj","replyname":"henson","replyliked":false,"likes":2}]
      },
      {
        "comment": "comment2",
        "commentname":"amal",
        "likes":42,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"john","replyliked":false,"likes":9}]
      }
    ] ,
    "showFull":false,
    "liked":false
    },
    {
    "name":"John" ,
    "team":"Data Science",
    "time":3,
    "content": "Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au.rssaacvdcvsgajgcvsgvctsvcsgvcagvvxvfsio",
    "tags":["data","tnp","peace"],
    "likes": 100,
    "viewallcomments":false,
    "fullcomment":1,
    
    "comments":[
      {
        "comment": "comment1",
        "commentname":"george",
        "likes":125,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"sonu","replyliked":false,"likes":54},{"reply":"ddg","replyname":"angel","replyliked":false,"likes":15},{"reply":"assghhj","replyname":"henson","replyliked":false,"likes":25}]
      },
      {
        "comment": "comment2",
        "commentname":"amal",
        "likes":912,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"john","replyliked":false,"likes":76}]
      },
      {
        "comment": "commasd asd asent3",
        "commentname":"jassim",
        "likes":182,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"e2342fd","replyname":"vyshnav","replyliked":false,"likes":15},{"reply":"rt","replyname":"popeye","replyliked":false,"likes":21}]
      },
      {
        "comment": "commsdsaa asnbdasa havsja ent4",
        "commentname":"johith",
        "likes":52,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"asd","replyname":"mathew","replyliked":false,"likes":4}]
      },
      {
        "comment": "comm ahsdhasd ahsdhasdiasbc asbyagsa agyiasbhaent5",
        "commentname":"grace",
        "likes":77,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"fsdfsd","replyname":"athira","replyliked":false,"likes":15}]
      }
    ] ,
    "showFull":false,
    "liked":false
    
    },
    {
    
    "name":"Jerry" ,
    "team":"TNP Football",
    "time":3,
    "content": "Vestibulum au.rssaacvdcvsgajgcvsgvctsvcsgvcagvvxvfsio,Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. ",
    "tags":["goal","heart","win"],
    "likes": 500,
    "viewallcomments":false,
    "fullcomment":1,
    
    "comments":[
      {
        "comment": "comment1",
        "commentname":"george",
        "likes":44,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"sonu","replyliked":false,"likes":2},{"reply":"ddg","replyname":"angel","replyliked":false,"likes":9},{"reply":"assghhj","replyname":"henson","replyliked":false,"likes":12}]
      },
      {
        "comment": "comment2",
        "commentname":"amal",
        "likes":69,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"john","replyliked":false,"likes":17}]
      },
      {
        "comment": "commasd asd asent3",
        "commentname":"jassim",
        "likes":35,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"e2342fd","replyname":"vyshnav","replyliked":false,"likes":1},{"reply":"rt","replyname":"popeye","replyliked":false,"likes":5}]
      },
      {
        "comment": "commsdsaa asnbdasa havsja ent4",
        "commentname":"johith",
        "likes":87,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"asd","replyname":"mathew","replyliked":false,"likes":33}]
      }
    
    ] ,
    "showFull":false,
    "liked":false
    
    
    }]


    likeFunction(i:any){
      this.post[i].liked=!this.post[i].liked,
      this.post[i].liked?this.post[i].likes+=1:this.post[i].likes-=1;
    }


    CommentlikeFunction(i:any,commentno:any){
      this.post[i].comments[commentno].commentliked=!this.post[i].comments[commentno].commentliked,
      this.post[i].comments[commentno].commentliked?this.post[i].comments[commentno].likes+=1:this.post[i].comments[commentno].likes-=1;
    }


    replylikeFunction(i:any,commentno:any,replyno:any){
      this.post[i].comments[commentno].replys[replyno].replyliked=!this.post[i].comments[commentno].replys[replyno].replyliked,
      this.post[i].comments[commentno].replys[replyno].replyliked?this.post[i].comments[commentno].replys[replyno].likes+=1:this.post[i].comments[commentno].replys[replyno].likes-=1;
    }

    random():number{
      console.log(Math.ceil(Math.random()*10));
  return Math.floor((Math.random()*10)/2);
  
  
    }
    
}
