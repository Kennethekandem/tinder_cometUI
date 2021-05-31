import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { HomeComponent } from './components/pages/home/home.component';
import {CometChatUI} from "../cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/CometChatUI/CometChat-Ui/cometchat-ui.module";
import { DefaultComponent } from './components/layouts/default/default.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { SideComponent } from './components/partials/side/side.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TokenInterceptor} from "./interceptors/token/token.interceptor";
import {CometChatUserListWithMessages} from "../cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/Users/CometChat-user-list-with-messages/cometchat-user-list-with-messages.module";
import { CometChatUserList } from "../cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/Users/CometChat-user-list/cometchat-user-list.module";
import { LoaderComponent } from './components/loader/loader.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    DefaultComponent,
    BlankComponent,
    SideComponent,
    LoaderComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule,
    CometChatUI,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CometChatUserListWithMessages,
    CometChatUserList
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
