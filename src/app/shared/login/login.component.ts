import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLogin = true;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
  ) { }

  ngOnInit() {
  }

  closeDialog(msg) {
    this.dialogRef.close(msg);
  }

}
