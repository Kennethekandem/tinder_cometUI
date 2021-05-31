import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any = [];
  allMatches: any = [];
  getUser: any = {};
  user = JSON.parse(<string>localStorage.getItem('user'));
  likeData: any = {};

  constructor(
      private service: UserService
  ) { }

  ngOnInit(): void {
    this.all();
    // this.cometUsers()
  }

  all() {

    this.service
        .all(this.user._id)
        .subscribe((response: any) => {
          this.users = response.data;
          this.single()
        })
  }

  single() {
    this.getUser = this.users[Math.floor(Math.random() * this.users.length)];
  }

  like(liked_id: any) {
    let data = {user_id: this.user._id, liked_id, match: 0};
    this.service
        .like(data)
        .subscribe((response: any) => {
          this.user = response.data._doc;
          this.single();
          window.location.reload();
        });
  }

  matches() {
    this.service
        .match(this.user._id)
        .subscribe((response: any) => {
          this.allMatches = response.data;
        })
  }

  cometUsers() {
    
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder().setLimit(limit).build();

    usersRequest.fetchNext().then(
      userList => {
        /* userList will be the list of User class. */
        console.log("User list received:", userList);
        /* retrived list can be used to display contact list. */
      },
      error => {
        console.log("User list fetching failed with error:", error);
      }
    );
  }

}
