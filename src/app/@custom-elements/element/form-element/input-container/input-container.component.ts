import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnChanges,
} from "@angular/core";
import { FormGroup, FormGroupDirective, FormControl } from "@angular/forms";
import { LabelPosition } from "../../../type/label-position.type";
import { ErrorModel } from "../../../model/error.model";

@Component({
  selector: "input-container",
  templateUrl: "./input-container.component.html",
  styleUrls: ["./input-container.component.scss"],
})
export class InputContainerComponent implements OnChanges {
  ngOnChanges() {
    if (this.config) {
      this.labelPosition = this.config.labelPosition;
      this.label = this.config.label;
      this.id = this.config.id;
      this.labelWidth = this.config.labelWidth;
      this.errors = this.config.errors;
      this.disabled = this.config.disabled;
      this.hint = this.config.hint;
      this.name = this.config.name;
      this.controlContainer = this.config.controlContainer;
      this.formControl = this.config.formControl;
    }
    if (this.label && this.labelPosition == "side")
      if (this.labelWidth) this.fixMargin = this.labelWidth + 16;
      else this.fixMargin = this.fixLabel.nativeElement.offsetWidth + 16;

    this.errorStyle = { "margin-right": this.fixMargin + "px" };
  }
  @Input() config: any;
  @Input() labelAlign: string = "center";
  @Input() showLabel: boolean = true;
  @Input() submitted: boolean = false;
  @ViewChild("fixLabel", { static: false }) fixLabel: ElementRef;

  labelPosition: LabelPosition = "side";
  label: string;
  id: string;
  errorStyle;
  labelWidth: number;
  errors: ErrorModel[] = [];
  disabled: boolean;
  hint: string;
  name: string;
  fixMargin: number;
  controlContainer: FormGroupDirective;
  formControl: FormControl;

  isFieldValid(formControl: FormControl) {
    return (
      (formControl.invalid && formControl.touched) ||
      (formControl.invalid && formControl.dirty)
    );
  }

  hasError(error: ErrorModel): boolean {
    return (
      this.controlContainer != null &&
      this.isFieldValid(this.formControl) &&
      this.formControl.hasError(error.type)
    );
  }
}
