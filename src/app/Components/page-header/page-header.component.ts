import { Component, OnInit, Input } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"]
})
export class PageHeaderComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() btnLabel: string;
  @Input() btnItems: MenuItem[] = [];

  ngOnInit() {}
}
