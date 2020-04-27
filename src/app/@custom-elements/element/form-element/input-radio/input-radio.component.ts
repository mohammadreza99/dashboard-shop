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
  selector: "input-radio",
  templateUrl: "./input-radio.component.html",
  styleUrls: ["./input-radio.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true
    }
  ]
})
export class InputRadioComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() items: (string | any)[];
  @Input() field: string;
  @Input() linear: boolean = true;

  name: string;

  ngOnInit() {
    super.ngOnInit();
    this.name = this.getId();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onChange() {
    if (this.controlContainer) this.controlOnChange(this.value);
    this.onChange.emit(this.value);
  }
}
