import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user!: string;
  password!: string;
  @Output() infoLogin= new EventEmitter<{ user:string; password:string }>();

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.infoLogin.emit({
      user: this.user,
      password: this.password
    });
  }
}
