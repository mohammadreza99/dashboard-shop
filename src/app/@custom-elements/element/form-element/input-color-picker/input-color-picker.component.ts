import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  forwardRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputBaseComponent } from "../input-base/input-base.component";

@Component({
  selector: "input-color-picker",
  templateUrl: "./input-color-picker.component.html",
  styleUrls: ["./input-color-picker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputColorPickerComponent),
      multi: true
    }
  ]
})
export class InputColorPickerComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() inline: boolean = true;
  @Input() format: "hex" | "rgb" | "hsb" = "hex";

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onChange() {
    console.log(this.value);
    
    if (this.hasValueAccessor) this.controlOnChange(this.value);
    this.onChange.emit(this.value);
  }
}
