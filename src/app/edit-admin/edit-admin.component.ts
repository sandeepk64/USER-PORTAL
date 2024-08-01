import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
 adminProfile:string ="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
  editAdminStatus: boolean = false;
  adminDetails:any = {}
  //share data from child to parent
  @Output() onAdminChanges = new EventEmitter ()

  constructor(private adminAPI:AdminService){}

  ngOnInit(): void {
    this.adminAPI.getAdminDetailsAPI().subscribe((result:any)=>{
      this.adminDetails = result
      if(result.profile){
        this.adminProfile = result.profile
      }
    })
  }

 editAdminBtnClicked(){
  this.editAdminStatus = true
}

getFile(event:any){
  let uploadFile = event.target.files[0]
  let fr = new FileReader()
  fr.readAsDataURL(uploadFile)
  fr.onload = (event:any)=>{
    this.adminProfile = event.target.result
    this.adminDetails.profile = this.adminProfile
   }
 }

 cancel(){
  this.editAdminStatus = false
 }
 
 updateAdmin(){
    if(this.adminDetails.name && this.adminDetails.password){
      this.adminAPI.editAdminAPI(this.adminDetails).subscribe({
        next:(result:any)=>{
          this.editAdminStatus = false
          alert("Admin details updated successfully!!!")
          sessionStorage.setItem("admin",JSON.stringify(result))
          this.onAdminChanges.emit(result.name)
        },
        error:(reason:any)=>{
          console.log(reason);
          alert("Updated failed... Please try after sometime!!!")
        }
      })
    }else{
      alert("Please fill the form completly!!!")
    }
 }

}

