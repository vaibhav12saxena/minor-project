import { Component, OnInit } from '@angular/core';
import{AbcService} from 'src/app/abc.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

constructor(private cons:AbcService,private route:Router) {}

name1:string;
pass1:string ;
mobile1:number;
id1:string;
pass2:string;
ngOnInit() {
  
}
valid=false;

signup(){
this.validation();
if(this.valid==true){
  this.cons.checkif(this.id1).subscribe(data => {
    if (data[0] != null) {
      alert('Username already exist');
    }
    else{
  this.cons.createuser(this.id1,this.name1,this.mobile1,this.pass1).subscribe();
  alert("New user created");
  this.route.navigate(['/login']);
    }
  })
}
}

//Cancel
cancel(){
this.id1= null
this.name1= ''
this.mobile1= null
this.pass1='';
this.pass2='';
alert("signup was cancelled")
}
//Validation
validation(){
if(this.pass1 != this.pass2){
  alert("Passwords do not match")
}  
if(this.name1==""||this.name1==null)  {
 alert("Name is required"); 
}
else if(this.mobile1==0|| this.mobile1<7000000000){
 alert("Please enter a valid Mobile number")
}
else if(isNaN(this.mobile1)==true){
 alert("Mobile needs to be a number")
}
else if(this.id1==""){
alert("user id is required")
}
else{ 
 this.valid=true
}
}
}