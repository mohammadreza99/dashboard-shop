import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  forwardRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputBaseComponent } from "../input-base/input-base.component";

@Component({
  selector: "input-textarea",
  templateUrl: "./input-textarea.component.html",
  styleUrls: ["./input-textarea.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextareaComponent),
      multi: true
    }
  ]
})
export class InputTextareaComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() rows: number;
  @Input() cols: number;
  @Input() autoResize: boolean;
  @Output() onResize = new EventEmitter();

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onInput() {
    if(this.controlContainer)
    this.controlOnChange(this.value);
    this.onInput.emit(this.value);
  }
}
