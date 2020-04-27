import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Color } from "../../type/color.type";
import { Position } from "../../type/position.type";

@Component({
  selector: "btn",
  templateUrl: "./btn.component.html",
  styleUrls: ["./btn.component.scss"]
})
export class BtnComponent implements OnInit {
  constructor() { }
  @Input() icon: string;
  @Input() iconPos: Position = "right";
  @Input() label: string;
  @Input() type: string;
  @Input() style: string;
  @Input() rounded: boolean;
  @Input() disabled: boolean;
  @Input() raised: boolean;
  @Input() color: Color;
  @Output() onFocus = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onClick = new EventEmitter();

  styleClass: string = "";

  _onBlur() {
    this.onBlur.emit();
  }

  _onFocus() {
    this.onFocus.emit();
  }

  ngOnInit() {
    if (this.rounded) this.styleClass += " ui-button-rounded";
    if (this.raised) this.styleClass += " ui-button-raised";
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
