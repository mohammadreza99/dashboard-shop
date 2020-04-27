import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  AfterViewInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputBaseComponent } from "../input-base/input-base.component";

@Component({
  selector: "input-mask",
  templateUrl: "./input-mask.component.html",
  styleUrls: ["./input-mask.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMaskComponent),
      multi: true
    }
  ]
})
export class InputMaskComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() mask: string = "99-999";
  @Input() type: string = "text";
  @Input() characterPattern: string = "[A-Za-z]";
  @Input() size: number = null;
  @Input() autoClear: boolean = false;
  @Input() slotChar: string = "_";
  @Output() onComplete = new EventEmitter();

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onComplete() {
    if(this.controlContainer)
    this.controlOnChange(this.value);
    this.onComplete.emit(this.value);
  }

  _onInput() {
    //this event NEVER fire! this is a BUG
    if(this.controlContainer)
    this.controlOnChange(this.value);
    this.onInput.emit(this.value);
  }
}
