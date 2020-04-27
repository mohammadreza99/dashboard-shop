import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "notif-item",
  templateUrl: "./notif-item.component.html",
  styleUrls: ["./notif-item.component.scss"]
})
export class NotifItemComponent implements OnInit {
  constructor() {}

  @Input() enableNotif: boolean;
  @Input() routerLink: string;
  @Input() icon: string;

  ngOnInit() {}
}
