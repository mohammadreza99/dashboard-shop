import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  Optional,
  Host,
  SkipSelf,
  AfterViewInit,
  ChangeDetectorRef,
  Injector,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  ControlContainer,
  FormGroupDirective,
  FormControlName,
  NgControl,
} from "@angular/forms";
import { LabelPosition } from "../../../type/label-position.type";
import { ErrorModel } from "../../../model/error.model";

@Component({
  selector: "input-base",
  template: "",
})
export class InputBaseComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private _controlContainer?: ControlContainer,
    private cdr?: ChangeDetectorRef,
    private injector?: Injector
  ) {
    this.controlContainer = this._controlContainer as FormGroupDirective;
  }
  @Input() placeholder: string = "";
  @Input() label: string;
  @Input() labelWidth: number;
  @Input() errors: ErrorModel[];
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() name: string;
  @Input() value: any;
  @Input() maxlength: number;
  @Input() labelPosition: LabelPosition = "side";
  @Input() hint: string = null;
  @Input() style: object = null;
  @Input() beforeAfterConfig: object = null;
  @Output() onInput = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter();
  @Output() onFocus = new EventEmitter();
  // @ContentChild(FormControlName, { static: false }) set setFormControlName(
  //   f: FormControlName
  // ) {
  //   if (f != undefined) {
  //     this.formControlName = f.name;
  //   }
  // }

  controlOnChange: (value?: any) => void;
  controlOnTouched: () => void;
  id: string;
  fixMargin: number;
  controlContainer: FormGroupDirective;
  formControl: FormControl;
  hasValueAccessor: boolean = false;
  containerConfig = {};

  ngOnInit() {
    this.id = this.getId();
  }

  ngAfterViewInit(): void {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) this.formControl = ngControl.control as FormControl;
    if (this.controlContainer && this.formControl) {
      if (this.formControl.errors && this.formControl.errors.required) {
        if (this.label) this.label += " *";
        if (this.placeholder != "" && this.placeholder != undefined)
          this.placeholder += " *";
        this.cdr.detectChanges();
      }
      this.controlContainer.ngSubmit.subscribe(() => {
        if (this.value == false) {
          this.formControl.setValue(null);
          this.value = null;
        }
        this.validateAllFormFields(this.controlContainer.form);
      });
    }
    this.containerConfig = {
      labelPosition: this.labelPosition,
      label: this.label,
      id: this.id,
      labelWidth: this.labelWidth,
      errors: this.errors,
      disabled: this.disabled,
      readonly: this.readonly,
      hint: this.hint,
      name: this.name,
      controlContainer: this.controlContainer,
      formControl: this.formControl,
    };
  }

  writeValue(value: any): void {
    this.value = value ? value : null;
    this.hasValueAccessor = true;
  }

  registerOnChange(fn: any): void {
    this.controlOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.controlOnTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  getId() {
    return Math.random().toString(36).substr(2, 9);
  }

  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl && !this.disabled) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  _onFocus() {
    this.onFocus.emit();
  }

  _onBlur() {
    if (this.hasValueAccessor) this.controlOnTouched();
    this.onBlur.emit();
  }
}
