import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  forwardRef
} from "@angular/core";
import { InputBaseComponent } from "../input-base/input-base.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "input-password",
  templateUrl: "./input-password.component.html",
  styleUrls: ["./input-password.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true
    }
  ]
})
export class InputPasswordComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() promptLabel: string = "لطفا رمز خود را وارد کنید";
  @Input() weakLabel: string = "ضعیف";
  @Input() mediumLabel: string = "متوسط";
  @Input() strongLabel: string = "قوی";
  @Input() feedback: boolean = true;
  @Input() showPassword: boolean = false;

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onInput() {
    if (this.hasValueAccessor) this.controlOnChange(this.value);
    this.onInput.emit(this.value);
  }
}
