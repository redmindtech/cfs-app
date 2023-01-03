import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common/common.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  hide = true;

  constructor(
    public router: Router,
    public common: CommonService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login(e: any): void {
    e.stopPropagation()
    e.preventDefault();
    this.username;
    this.password;
    if(!this.username){
      this.openSnackBarEnterUsername();
    }
    if(!this.password){
      this.openSnackBarEnterPassword();
    }
    if(!this.username && !this.password){
      this.openSnackBarEnterUsernamePassword();
    }
    this.common.login(this.username, this.password).subscribe( (data: any) => {

      if(data && data.Token && data.Message == null) {
        window.localStorage.setItem("Token", data.Token);
         this.router.navigate(['/home']);
      }
      if(data.Token == null && data.Message == "PASSWORD EXPIRED") {
        this.openSnackBarPasswordExpired();
      }
      if(data.Token == "" && data.Message == "INVALID USER") {
        this.openSnackBarPasswordInvalidUser();
      }
      // this.username = "";
      // this.password = "";
    })

  }

  openSnackBarPasswordExpired() {
    this._snackBar.open('PASSWORD EXPIRED', 'OK', {duration: 2000});
  }
  openSnackBarPasswordInvalidUser() {
    this._snackBar.open('INVALID USERNAME OR PASSWORD', 'OK', {duration: 2000});
  }
  openSnackBarEnterUsername(){
    this._snackBar.open('PLEASE ENTER USERNAME', 'OK', {duration:2000});
  }
  openSnackBarEnterPassword(){
    this._snackBar.open('PLEASE ENTER PASSWORD', 'OK', {duration:2000});
  }
  openSnackBarEnterUsernamePassword(){
    this._snackBar.open('PLEASE ENTER USERNAME AND  PASSWORD', 'OK', {duration:2000});
  }
}
