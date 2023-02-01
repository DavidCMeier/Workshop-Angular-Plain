import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../core/services/auth.service";
import { AppSettingsService } from "../../../../shared/services/app-settings.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isLoggedIn: boolean=false;

  constructor(private authService: AuthService, private settingsService: AppSettingsService) { }

  ngOnInit(): void {
    console.log(this.settingsService.appSettings);
  }

  login(loginInfo: {user: string, password: string}) {
    console.log(loginInfo);
    this.authService.login(loginInfo.user, loginInfo.password).subscribe((res) => {
      console.log(res);
      this.isLoggedIn = res;
    })
  }

  isLogin() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
