import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  AfterViewInit,
  Optional,
  Host,
  SkipSelf,
  forwardRef,
  Injector,
} from "@angular/core";
import {
  ControlValueAccessor,
  ControlContainer,
  FormGroupDirective,
  FormGroup,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
} from "@angular/forms";
import { Orientation } from "../../../type/orientation.type";

@Component({
  selector: "input-slider",
  templateUrl: "./input-slider.component.html",
  styleUrls: ["./input-slider.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSliderComponent),
      multi: true,
    },
  ],
})
export class InputSliderComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  constructor(
    @Optional() @Host() @SkipSelf() private _controlContainer: ControlContainer,
    private injector?: Injector
  ) {}

  @Input() label: string;
  @Input() labelWidth: number;
  @Input() items: string[];
  @Input() linear: boolean = true;
  @Input() disabled: boolean = false;
  @Input() value: boolean;
  @Input() style: object = {};
  @Input() readonly: boolean;
  @Input() errorMessage: string = "الزامی است.";
  @Output() onChange = new EventEmitter();
  @Input() orientation: Orientation = "horizontal";
  @Input() range: boolean = false;
  @Input() step: number;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() width: number;
  @Input() height: number = 150;
  @Output() onSlideEnd = new EventEmitter();

  name: string;
  controlContainer: FormGroupDirective;
  formControl: FormControl;
  controlOnChange: (value?) => void;
  controlOnTouch: () => void;

  ngOnInit() {
    this.name = this.getGroupId();
    var style = {
      width: this.orientation == "horizontal" ? this.width + "px" : "",
      height: this.orientation == "vertical" ? this.height + "px" : "",
    };
    Object.assign(this.style, style);
  }

  ngAfterViewInit(): void {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) this.formControl = ngControl.control as FormControl;
    this.controlContainer = this._controlContainer as FormGroupDirective;
    if (this.controlContainer)
      this.controlContainer.ngSubmit.subscribe(() =>
        this.validateAllFormFields(this.controlContainer.form)
      );
    this.formControl.setValue([this.min, this.max]);
  }

  getGroupId() {
    return Math.random().toString(36).substr(2, 9);
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnTouched(fn: any): void {
    this.controlOnTouch = fn;
  }

  registerOnChange(fn: any): void {
    this.controlOnChange = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isFieldValid(form: FormGroup, field: string) {
    return (
      (form.get(field).invalid && form.get(field).touched) ||
      (form.get(field).invalid && form.get(field).dirty)
    );
  }

  _onChange() {
    if (this.controlContainer) this.controlOnChange(this.value);
    this.onChange.emit(this.value);
  }

  _onSlideEnd() {
    if (this.controlContainer) this.controlOnChange(this.value);
    this.onChange.emit(this.value);
  }
}
