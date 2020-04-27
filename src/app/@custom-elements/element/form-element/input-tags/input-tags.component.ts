import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  AfterViewInit,
  forwardRef,
  EventEmitter
} from "@angular/core";
import { Chips } from "primeng/chips";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputBaseComponent } from "../input-base/input-base.component";

@Component({
  selector: "input-tags",
  templateUrl: "./input-tags.component.html",
  styleUrls: ["./input-tags.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTagsComponent),
      multi: true
    }
  ]
})
export class InputTagsComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() max: number;
  @Input() field: string;
  @Input() inputStyle: string;
  @Input() allowDuplicate: boolean = false;
  @Input() addOnBlur: boolean = false;
  @Input() addOnTab: boolean = false;
  @Output() onAdd = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onTagClick = new EventEmitter();
  @ViewChild("floatChips", { static: false }) floatChips: Chips;

  innerInput: any;

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.floatChips)
      this.innerInput = this.floatChips.inputViewChild.nativeElement;
  }

  _onAdd() {
    if (this.hasValueAccessor) this.controlOnChange(this.value);
    this.onAdd.emit(this.value);
  }

  _onRemove() {
    if (this.hasValueAccessor) this.controlOnChange(this.value);
    this.onRemove.emit(this.value);
  }

  _onTagClick() {
    if (this.hasValueAccessor) this.controlOnChange(this.value);
    this.onTagClick.emit(this.value);
  }

  __onBlur() {
    if (this.innerInput && this.innerInput.value == "") this._onBlur();
    else {
      if (this.hasValueAccessor) this.controlOnTouched();
      this.onBlur.emit();
    }
  }
}
