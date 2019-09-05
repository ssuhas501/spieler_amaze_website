import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../shared/login/login.component';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  href: string;

  currentRoute: string;
  constructor(private router: Router, public dialog: MatDialog) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url.substr(1)
      }
    });
  }
  ngOnInit() {
  }


  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '550px',
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Login Result :', result);

    });
  }

}
