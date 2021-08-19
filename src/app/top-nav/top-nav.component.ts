import { Component, Input, OnInit } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { AppComponent } from '../app.component';
import { NavItem } from '../common/navitem';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  hidden = false;
  temp: any[] = [];
  opennotify: boolean = false;
  apidata: any[] = [];
  datalist: any[] = [];
  count: number = 0;
  option: number = 0;
  // @Input()
  items!: NavItem[];
  constructor(private appcomp: AppComponent, public navService: CommonService, public dialog: MatDialog, public router: Router) {
  }
  tempintraval!: any;

  ngOnInit() {
    this.items = this.appcomp.navItems;
    this.tempintraval = setInterval(() => {
      this.navService.checkData().subscribe(res => this.datalist = res);
      this.count = (this.datalist.length);
      // if (this.datalist.length > this.apidata.length) {
      //   this.hidden = true;
      //   this.count = (this.datalist.length - this.apidata.length);
      // } else {
      //   this.hidden = false;
      // }
    }, 5000);
  }


  notificationopen() {
    this.navService.checkData().subscribe(res => this.datalist = res);
    this.apidata = this.datalist;
    this.temp = this.datalist;
    const dialogPosition: DialogPosition = {
      top: '50px',
      left: '800px'
    };
    const dialogRef = this.dialog.open(NotificationComponent, {
      maxWidth: '400px',
      minWidth: '600px',
      position: dialogPosition,
      data: { row: this.apidata }
    });

  }
  ngOnDestroy(): void {
    // this.tempintraval.unsubscribe();
  }
  calenderopen() {
    // this.router.navigate(['calender']);
    this.router.navigateByUrl('/calender');
  }
  logout() {
    debugger;
    this.appcomp.topnav = false;
    this.router.navigate(['/']);
    sessionStorage.removeItem('logindet');
    localStorage.removeItem('login');
    this.navService.closeNav();
  }
  clickevent(item: NavItem) {
    if (item.children)
      this.appcomp.childrenitems = item.children;
    this.navService.openNav();
  }
  togglemenu() {
    debugger;
    if (this.option === 0) {
      this.option = 1;
    } else {
      this.option = 0;
    }
    this.navService.togglemenu();
  }
}


