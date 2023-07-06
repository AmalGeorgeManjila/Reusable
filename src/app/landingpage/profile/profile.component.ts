import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostdialogComponent } from 'src/app/postdialog/postdialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private dialog:MatDialog) { }
  activeprofile:any=["../../../assets/Rectangle 43lady1.png","../../../assets/Rectangle 44lady2.png","../../../assets/Rectangle 45lady3.png","../../../assets/Rectangle 46lady5.png","../../../assets/Rectangle 47lady4.png","../../../assets/Rectangle 43lady1.png","../../../assets/Rectangle 44lady2.png","../../../assets/Rectangle 45lady3.png","../../../assets/Rectangle 46lady5.png","../../../assets/Rectangle 47lady4.png"];

  activeones:number=3;
username:any;
usermail:any;

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.usermail=localStorage.getItem('usermail');
  }

  createpost(){
    const dialogRef = this.dialog.open(PostdialogComponent, {
      disableClose:false,
      hasBackdrop:true
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });


  }
  
  
}
