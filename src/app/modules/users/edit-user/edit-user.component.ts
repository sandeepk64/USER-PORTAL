import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any;
  
  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      //console.log(result);
      const {id} = result
      //api call
      this.getUserDetails(id)
    })
  }
  
  getUserDetails(id:any){
    this.api.getSingleUserAPI(id).subscribe((result:any)=>{
      this.user = result
      console.log(this.user);
      
    })
  }
  
  cancel(userid:any){
    this.getUserDetails(userid)
  }
  
  editUser(){
    this.api.editUserAPI(this.user).subscribe((result:any)=>{
    this.router.navigateByUrl('/users')
    })
  }

}
