import { Component, OnInit } from "@angular/core";

import { Position } from "../../type/position.type";

@Component({
  selector: "toast-item",
  templateUrl: "./toast-item.component.html",
  styleUrls: ["./toast-item.component.scss"]
})
export class ToastItemComponent implements OnInit {
  position: Position = "bottom-center";
  ngOnInit() {}
}
