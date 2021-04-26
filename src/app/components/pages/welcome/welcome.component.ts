import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CometChat} from "@cometchat-pro/chat";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const authKey = "cdf0cba5238483562e204a0fe165724b974b2b13";
    const uid = "superhero1";

    CometChat.login(uid, authKey).then(
        (user) => {
          console.log("Login Successful:", { user });
          this.router.navigate(["/home"]);
        },
        (error) => {
          console.log("Login failed with exception:", { error });
        }
    );
  }
}
