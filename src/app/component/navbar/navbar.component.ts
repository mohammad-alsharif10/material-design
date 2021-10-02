import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  sideNav: MatSidenav;


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.sideNav);
  }

  openCloseDrawer(): void {
    this.sideNav.toggle().then((_: any) => _);
  }
}
