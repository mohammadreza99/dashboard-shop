import {
  Component,
  OnInit,
  Input,
  forwardRef,
  AfterViewInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Moment } from "jalali-moment";
import { IDatePickerConfig } from "ng2-jalali-date-picker";

import { InputBaseComponent } from "../input-base/input-base.component";
import { DatePickerMode } from '../../../type/date-picker-mode.type';


@Component({
  selector: "input-date-picker",
  templateUrl: "./input-date-picker.component.html",
  styleUrls: ["./input-date-picker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDatePickerComponent),
      multi: true
    }
  ]
})
export class InputDatePickerComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() datePickerMode: DatePickerMode = "day";
  @Input() minDate: Moment | string;
  @Input() maxDate: Moment | string;
  @Input() minTime: Moment | string;
  @Input() maxTime: Moment | string;
  @Input() config: IDatePickerConfig;
  @Input() clearable: boolean = false;

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  __onBlur() {
    setTimeout(() => {
      super._onBlur();
    }, 150);
  }

  _onChange(args) {
    this.value = args;
    if (this.hasValueAccessor) this.controlOnChange(this.value);
    this.onChange.emit(this.value);
  }
}
