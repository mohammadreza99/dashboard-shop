import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MenuItem } from "primeng/api";
import { Position } from "../../type/position.type";
import { Direction } from "../../type/direction.type";
import { Color } from "../../type/color.type";

@Component({
  selector: "btn-split",
  templateUrl: "./btn-split.component.html",
  styleUrls: ["./btn-split.component.scss"],
})
export class BtnSplitComponent implements OnInit {
  constructor() {}
  @Input() label: string = "لیبل";
  @Input() icon: string = "fa fa-book";
  @Input() iconPos: Position = "right";
  @Input() style: string = null;
  @Input() menuStyle: string = null;
  @Input() dir: Direction = "ltr";
  @Input() disabled: boolean = false;
  @Input() color: Color;
  @Input() items: MenuItem[];
  @Output() onClick = new EventEmitter();
  @Output() onDropdownClick = new EventEmitter();

  styleClass: string = "";
  _onClick() {
    this.onClick.emit();
  }

  _onDropdownClick() {
    this.onDropdownClick.emit();
  }

  ngOnInit() {
    switch (this.color) {
      case "lightGray":
        this.styleClass += " ui-button-secondary";
        break;
      default:
        this.styleClass += `ui-button-${this.color} bg-${this.color} border-${this.color}`;
        break;
    }
  }
}
