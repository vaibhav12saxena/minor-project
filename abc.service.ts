import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AbcService {
   constructor(private http:HttpClient) { }
   // Variables
   fid:number;
   name:string;
   price:number;
   description: string;
   newprod:any;
   
   //update function from home component
     upData(id,name,price,description){
      this.fid=id
      this.name=name
      this.price=price
      this.description=description
     }
   //Sends data to update component 
     rew(){
      return {
      id: this.fid,
      name:this.name,
      price:this.price,
      description:this.description
      }
     }
  
  //Reads data from 
  readData():Observable<Object>
  {
    console.log("Read Data");
    return this.http.get("http://localhost:1234/rest/api/readByName")
  };


//Add data to database
     writeData(id1,name1,price1,des1):Observable<Object>
     { 
      
       return this.http.post("http://localhost:1234/rest/api/readById", {
         id:id1,
         name: name1,
         price:price1,
         description: des1
         });
       }
  //Delete data from database 
  deleteData(readId):Observable<Object>
  {
    return this.http.post("http://localhost:1234/rest/api/delete", {
         id: readId
         });

  }  
  updateData(newprod,id1,name1,price1,des1):Observable<Object>{
    /* this.deleteData(readid);
     return this.http.post("http://localhost:1234/rest/api/readById", {
         id:empid1,
         name: empname1,
         salary:empsal1,
         joiningdate:empjoin1,
         department: empdep1
         })
        */
       this.newprod=newprod;
     return this.http.post(`http://localhost:1234/rest/api/update`, {
      id1:{id:id1},
      id2:{
      name: name1,
      price:price1,
      description: des1
      }});
  }
  //Deletes all the data
  deleteall(){
    return this.http.post(`http://localhost:1234/rest/api/deleteall`,{})
  }
  //Log in by a user
  login(user,pass){
    return this.http.post(`http://localhost:1234/rest/api/login`,{
      user: user,
      pass: pass
    })
  }
  //Check if user already present
  checkif(user){
    return this.http.post(`http://localhost:1234/rest/api/login`,{
      user: user})
  }
  //Create new user
  createuser(id1,name1,mobile1,pass1):Observable<Object>
     { 
       return this.http.post("http://localhost:1234/rest/api/createuser", {
         user:id1,
         name: name1,
         mobile:mobile1,
         pass: pass1
         });
       }

   }