import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { MenuItem } from 'primeng';

@Component({
  selector: 'sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  constructor(private dataService: DataService) {}

  items: MenuItem[] = this.dataService.sideMenuItems;

  ngOnInit() {}
}