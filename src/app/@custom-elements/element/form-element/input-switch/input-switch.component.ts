import { Component, OnInit, forwardRef, AfterViewInit } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputBaseComponent } from "../input-base/input-base.component";

@Component({
  selector: "input-switch",
  templateUrl: "./input-switch.component.html",
  styleUrls: ["./input-switch.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSwitchComponent),
      multi: true,
    },
  ],
})
export class InputSwitchComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onChange() {
    console.log(this.value);
    
    if (
      !this.value &&
      this.controlContainer &&
      this.formControl.errors &&
      this.formControl.errors.required
    ) {
      this.formControl.setValue(null);
      this.value = null;
    }
    if (this.hasValueAccessor) this.controlOnChange(this.value);
    this.onChange.emit(this.value);
  }
}
