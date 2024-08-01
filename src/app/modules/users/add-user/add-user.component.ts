import { Component, OnInit } from '@angular/core';
import { userModel } from '../user-model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
user:userModel = {}
allUsers:any = []

constructor(private api:ApiService,private router:Router){}

ngOnInit(): void {
  this.api.getAllUsersAPI().subscribe((result:any)=>{
    this.allUsers = result
  })
}

cancel(){
  this.user = {}
}
saveUser(){
  const existinUser = this.allUsers.find((item:any)=>item.id==this.user.id)
  if(existinUser){
    alert("Employee Id already exist... Use unique id to add new user!!!")
  }else{
   //api call
  this.api.addUserAPI(this.user).subscribe({
    next:(result:any)=>{
      console.log(result);
      alert("User added successfuly to DB")
      this.router.navigateByUrl('/users')
    },
    error:(reason:any)=>{
      console.log(reason);
      
    }
  })
  }
}
}
