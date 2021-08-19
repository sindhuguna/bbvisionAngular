import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResetPojo } from '../master/model/login';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  loginForm!: FormGroup;
  newpwderr: boolean = false;
  confirmpwderr: boolean = false;
  err: string = "";
  resetpwd = new ResetPojo();
  constructor(public dialogRef: MatDialogRef<ForgotpasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }
  error_messages = {
    'newPwd': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length should be less than 6 Char.' },
      { type: 'maxlength', message: 'password length should be greater than 8 Char.' }
    ],
    'confirmPwd': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length should be less than 6 Char.' },
      { type: 'maxlength', message: 'password length should be greater than 8 Char.' }
    ],
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // username: new FormControl(''),
      newPwd: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ])),
      confirmPwd: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ])),
    });
  }

  password() {
    this.err = "";
    // const username = this.loginForm.controls.username?.value;
    const password = this.loginForm.controls.newPwd?.value;
    const confirmPassword = this.loginForm.controls.confirmPwd?.value;
    if (password !== confirmPassword) {
      alert("Not matching");
      return;
    } else if (this.loginForm.controls.newPwd.status === "INVALID") {
      this.newpwderr = true;
      this.confirmpwderr = false;
      if (password === "") {
        this.err = this.error_messages.newPwd[0].message;
        return;
      } else if (password.length < 6) {
        this.err = this.error_messages.newPwd[1].message;
        return;
      } else if (password.length > 8) {
        this.err = this.error_messages.newPwd[2].message;
        return;
      }
    } else if (this.loginForm.controls.confirmPwd.status === "INVALID") {
      this.confirmpwderr = true;
      this.newpwderr = false;
      if (confirmPassword === "") {
        this.err = this.error_messages.newPwd[0].message;
        return;
      } else if (confirmPassword.length < 6) {
        this.err = this.error_messages.newPwd[1].message;
        return;
      } else if (confirmPassword.length > 8) {
        this.err = this.error_messages.newPwd[2].message;
        return;
      }
    } else {
      this.resetpwd.newpassword = password;
      // this.resetpwd.username = username;
      this.dialogRef.close(this.resetpwd);
    }
  }

  onFocusOutEventnew(event: any) {
    this.err = "";
    this.confirmpwderr = false;
    this.newpwderr = false;
    if (event.type === "focusout") {
      const password = this.loginForm.controls.newPwd?.value;
      if (password === "") {
        this.newpwderr = true;
        this.confirmpwderr = false;
        this.err = this.error_messages.newPwd[0].message;
        return;
      } else if (password.length < 6) {
        this.newpwderr = true;
        this.confirmpwderr = false;
        this.err = this.error_messages.newPwd[1].message;
        return;
      } else if (password.length > 8) {
        this.newpwderr = true;
        this.confirmpwderr = false;
        this.err = this.error_messages.newPwd[2].message;
        return;
      }
    }
  }

  onFocusOutEventconfirm(event: any) {
    this.err = "";
    this.password();
    this.confirmpwderr = false;
    this.newpwderr = false;
    if (event.type === "focusout") {
      const confirmPassword = this.loginForm.controls.confirmPwd?.value;
      if (confirmPassword === "") {
        this.confirmpwderr = true;
        this.newpwderr = false;
        this.err = this.error_messages.newPwd[0].message;
        return;
      } else if (confirmPassword.length < 6) {
        this.confirmpwderr = true;
        this.newpwderr = false;
        this.err = this.error_messages.newPwd[1].message;
        return;
      } else if (confirmPassword.length > 8) {
        this.confirmpwderr = true;
        this.newpwderr = false;
        this.err = this.error_messages.newPwd[2].message;
        return;
      }
    }
  }
}
