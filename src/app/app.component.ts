import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Http Client Demo';
  users: IUser[] = [];

  constructor(private _userService: UsersService) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userService.getUsers().subscribe(results => { this.users = results; });
  }
}


interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  };
  phone: string;
  website: string;
      company: {
      name: string;
      catchPhrase: string;
      bs: string;
  };
}
