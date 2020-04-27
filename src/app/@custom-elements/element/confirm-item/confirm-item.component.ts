import { Component, OnInit } from "@angular/core";
import { ConfirmOptions } from '../../model/confirm-options.model';


@Component({
  selector: "confirm-item",
  templateUrl: "./confirm-item.component.html",
  styleUrls: ["./confirm-item.component.scss"]
})
export class ConfirmItemComponent implements OnInit {
  constructor() {}
  options: ConfirmOptions = {
    header: "",
    icon: "",
    key: "",
    acceptLabel: "بله",
    rejectLabel: "خیر",
    acceptVisible: true,
    rejectVisible: true
  };

  ngOnInit() {}
}
