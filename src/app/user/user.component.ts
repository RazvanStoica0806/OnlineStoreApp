import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  data: string;

  constructor(private userService: UserService,
              private dataService: DataService) {}

  ngOnInit() {
    this.user = this.userService.user;
    //I will use my dataService to get the details and then use the data I get back to set this.data equal to the data I get baack
    console.log('this.dataService.getDetails():', this.dataService.getDetails());
    this.dataService.getDetails().then((data:string) => this.data = data);
  }

}
