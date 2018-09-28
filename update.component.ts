import { Component, OnInit } from '@angular/core';
import{AbcService} from 'src/app/abc.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private cons:AbcService,private route:Router) {}
  upprod:any
  newprod:{};
  name1:string;
  des1:string ;
  price1:number;
  id1:number;
  ngOnInit() {
    this.upprod=this.cons.rew()
    console.log(this.upprod)
  this.name1=this.upprod.name;
  this.des1=this.upprod.description;
  this.price1=this.upprod.price;
  this.id1=this.upprod.id;
  }
valid=false;

Update(){
  this.validation();
  if(this.valid==true){
    this.cons.updateData(this.newprod,this.id1,this.name1,this.price1,this.des1).subscribe(data=>{
      this.route.navigate(["/home"])
    })
  alert("Update successfull");
}
}

//Cancel
cancel(){
  this.id1= null
  this.name1= ''
  this.price1= null
  this.des1='';
  alert("Update was cancelled")
}
//Validation
validation(){
  if(this.name1==""||this.name1==null)  {
   alert("Name is required"); 
  }
  else if(this.name1.charCodeAt(0) >90||this.name1.charCodeAt(0) <65){
   alert("First letter of name should be a capital letter")
  }
  else if(this.price1==0|| this.price1<0){
   alert("Price is required or can't be negative")
  }
  else if(isNaN(this.price1)==true){
   alert("Price needs to be a number")
  }
  else if(this.des1==""){
  alert("Description is required")
  }
  else{ 
   this.valid=true
  }
 }
}