import { Component, OnInit } from '@angular/core';
import {AbcService} from 'src/app/abc.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cons: AbcService, private route: Router) { }
  username: string;
  pass: string;
  id: any;
  ngOnInit() {
    this.id = 0;
  }
  signup() {
    this.route.navigate(['/signup']);
  }
  Login() {
    this.cons.login(this.username, this.pass).subscribe(data => {
      console.log(data);
      if (data[0] != null) {
        alert('Login successful');
        this.id = 1;
        if (this.id === 1) {
        this.id = 0;
        this.route.navigate(['/home']); }
      } else {
        alert('Incorrect password or id');
        this.id = 0;
      }
    });  
  }

}
