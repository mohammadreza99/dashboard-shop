import {
  Component,
  OnInit,
  AfterViewInit,
  forwardRef,
  Input,
} from "@angular/core";
import { NG_VALUE_ACCESSOR, FormControl } from "@angular/forms";

import { InputBaseComponent } from "../input-base/input-base.component";
import { ErrorModel } from 'src/app/@custom-elements/model/error.model';

@Component({
  selector: "input-checkbox-single",
  templateUrl: "./input-checkbox-single.component.html",
  styleUrls: ["./input-checkbox-single.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxSingleComponent),
      multi: true,
    },
  ],
})
export class InputCheckboxSingleComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() checkboxIcon: string = "pi pi-check";

  ngOnInit() {
    super.ngOnInit();
    this.labelPosition="top"
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onChange() {
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

  isFieldValid(formControl: FormControl) {
    return (
      (formControl.invalid && formControl.touched) ||
      (formControl.invalid && formControl.dirty)
    );
  }


}
