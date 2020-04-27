import { Component, OnInit, Input, AfterViewInit, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputBaseComponent } from "../input-base/input-base.component";

@Component({
  selector: "input-checkbox-list",
  templateUrl: "./input-checkbox-list.component.html",
  styleUrls: ["./input-checkbox-list.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxListComponent),
      multi: true
    }
  ]
})
export class InputCheckboxListComponent extends InputBaseComponent
  implements OnInit ,AfterViewInit{
  @Input() items = [];
  @Input() linear: boolean = true;
  @Input() checkboxIcon: string = "pi pi-check";

  name: string;
  ngOnInit() {
    super.ngOnInit();
    this.name = this.getGroupId();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }


  _onChange() {
    if (this.hasValueAccessor) {
      if (!this.value || (this.value && this.value.length == 0))
        this.controlOnChange(null);
      else
        this.controlOnChange(this.value);
    }
    this.onChange.emit(this.value);
  }

  getGroupId() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  }
}
