import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.component';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {  
    console.log(this.user);
  }

}
