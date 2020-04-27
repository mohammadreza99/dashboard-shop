import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  forwardRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputBaseComponent } from "../input-base/input-base.component";

@Component({
  selector: "input-number",
  templateUrl: "./input-number.component.html",
  styleUrls: ["./input-number.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    }
  ]
})
export class InputNumberComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() min: number = 0;
  @Input() max: number;
  @Input() step: number = 1;
  @Input() size: number;
  @Input() thosandSeparator: string = null;
  @Input() decimalSeparator: string = null;

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onChange() {
    if(this.controlContainer)
    this.controlOnChange(this.value);
    this.onChange.emit(this.value);
  }
}
