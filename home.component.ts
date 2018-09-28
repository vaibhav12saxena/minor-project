import { Component, OnInit } from '@angular/core';
import{AbcService} from 'src/app/abc.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  //Variables
  title = 'product Page';
  info:any=[];
  id:number;
  t:number;
  show=0;
  newprod:{};
  name1:string;
  des1:string ;
  price1:number;
  id1:number;
  temp=0;
  valid=false;
  constructor(private cons:AbcService){}

  //Loading Data
    ngOnInit(){
      this.cons.readData().subscribe((data=>{ this.info=data}))
    }
  //Delete an item  
    delete(w){
      this.findIndex(w);  
      var r= confirm("Delete product with id number: "+w+" ?")
      if (r == true) {
        this.cons.deleteData(w).subscribe()
        this.info.splice(this.t,1);
        this.t=null
      } 
      else {
        alert("You pressed Cancel!");
      }
    }
    
  //Find Index
    findIndex(w){
      for (var q=0;q<this.info.length;q++){
       if(w==this.info[q].id){
       this.t=q; 
       }
      } 
    }
  
  //Shows add form
     add1(){
      if (this.show==1){
        this.show=0;
      }
      else{
        this.show=1;
      }
     }
  //Checks if same id is present or not
    check(){
      for (var t=0;t<this.info.length;t++){
        if(this.id1==this.info[t].id){
        this.temp=1;
        }
      }
    }

  //Add Item
  Add(){
    this.validation();
    if(this.valid==true){
      this.newprod={
      "id": this.id1,
      "name": this.name1,
      "price": this.price1,
      "description": this.des1 
       }
       this.check()
       if(this.temp==0){
         this.cons.writeData(this.id1,this.name1,this.price1,this.des1,).subscribe();  
         this.info.push(this.newprod); 
         this.id1= null
         this.name1= ''
         this.price1= null
         this.des1='';
         this.show=0
         alert("Add succesfull")
       }
       else{
         alert("Id already present it cannot be duplicated")
         this.temp=0;
       } 
    }
  }
  //Validation
    validation(){
     if(this.id1<1|| this.id1==null || this.id1>9999){
      alert("id is should be between 1 and 9999 both inclusive")
     }
     else if(isNaN(this.id1)==true){
      alert("id needs to be a number")
     }
     else if(this.name1==""||this.name1==null)  {
      alert("Name is required"); 
     }
     else if(this.name1.charCodeAt(0) >90||this.name1.charCodeAt(0) <65){
      alert("First letter of name should be a capital letter")
     }
     else if(this.price1==null|| this.price1<0){
      alert("Price is required or can't be negative")
     }
     else if(isNaN(this.price1)==true){
      alert("Price needs to be a number")
     }
     else if(this.des1==null){
     alert("Description is required")
     }
     else{ 
      this.valid=true
     }
    }
  //Cancel
    cancel(){
      this.id1= null
      this.name1= ''
      this.price1= null
      this.des1='';
      this.show=0
      alert("Add was not succesfull")
    }
  // Update
    Update(w){
      this.findIndex(w);
      this.cons.upData(this.info[this.t].id,this.info[this.t].name,this.info[this.t].price,this.info[this.t].description);
  }
  //Sorting
    sortId(){
      alert("Sorted according to id");
      this.info.sort(function(a,b){
      return(''+a.id).localeCompare(b.id)
      })
    }
    sortName(){
      alert("Sorted according to name");
      this.info.sort(function(a,b){
      return(''+a.name).localeCompare(b.name)
      })
    }
    sortPrice(){
      alert("Sorted according to price");
      this.info.sort(function(a,b){
      return(a.price-b.price)
      })
    }
    sortDes(){
      alert("Sorted according to Description");
      this.info.sort(function(a,b){
      return(''+a.description).localeCompare(b.description)
      })
    }
    deleteall(){
      var r= confirm("Are you sure you want to delete all data")
      if(r==true){
        var p= confirm("Sochlo sahi me ho jaega")
        if(p==true){
          this.cons.deleteall().subscribe();
          window.location.reload()    
        }
        else{
          alert("Good you saved the data")
        }
      }
      else{
        alert("You chose the right path")
      }
    }
/*



i:number;
 Update(w){
  for (var q=0;q<this.info.length;q++){
    if(w==this.info[q].id){
      var t=q; 
      }
  }  
  this.i=t
  this.id=this.info[t].id
  this.id1=this.info[t].id;
  this.price1=this.info[t].price;
  this.name1=this.info[t].name;
  this.des1=this.info[t].description;
  }
Updatenow(){
  this.newprod={"id": this.id1,
  "name": this.name1,
  "price": this.price1,
  "description": this.des1,
}
this.check()
if(this.temp==0|| this.id1==this.info[this.i].id){
  alert("if called")
  this.info[this.i]=this.newprod;
  
  this.cons.updateData(this.id,this.info[this.i].id,this.info[this.i].name,this.info[this.i].price,this.info[this.i].description).subscribe()

  this.id1= 0
  this.name1= ''
  this.price1= 0
  this.des1='';}
  else{
    alert("Id already present it cannot be duplicated")
    this.temp=0;
  }

}



filter(){
  
  prompt("select the field on which basis you want to filter")
}

*/
}  
