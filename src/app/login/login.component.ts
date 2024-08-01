import { Component } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 email:string = ""
 password:string = ""

constructor(private adminApi:AdminService){}

login(){
  if(this.email && this.password){
    this.adminApi.loginAPI(this.email,this.password)
  }else{
    alert("Please fill the form completly!!!")
  }
}

}
