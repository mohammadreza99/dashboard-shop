import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  forwardRef
} from "@angular/core";
import { SelectItem } from "primeng/api";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { InputBaseComponent } from "../input-base/input-base.component";
import { FilterMatchMode } from '../../../type/filter-match-mode.type';
@Component({
  selector: "input-multi-select",
  templateUrl: "./input-multi-select.component.html",
  styleUrls: ["./input-multi-select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMultiSelectComponent),
      multi: true
    }
  ]
})
export class InputMultiSelectComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() items: SelectItem[];
  @Input() hasFilter: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() optionLabel: string = null;
  @Input() filterBy: string = "label";
  @Input() scrollHeight: string = "200px";
  @Input() panelStyle: string = null;
  @Input() showToggleAll: boolean = true;
  @Input() filterPlaceHolder: string = "";
  @Input() filterMatchMode: FilterMatchMode = "contains";
  @Input() defaultLabel: string = "انتخاب";
  @Input() overlayVisible: boolean = false;
  @Input() displaySelectedLabel: boolean = true;
  @Input() selectedItemsLabel: string = "{0} مورد انتخاب شدند";
  @Input() resetFilterOnHide: boolean = true;
  @Input() emptyFilterMessage: string = "موردی یافت نشد.";
  @Input() selectionLimit: number = null;
  @Input() maxSelectedLabels: number = 3;
  @Output() onClick = new EventEmitter();
  @Output() onPanelShow = new EventEmitter();
  @Output() onPanelHide = new EventEmitter();

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onClick() {
    if (this.hasValueAccessor) {
      if (!this.value || (this.value && this.value.length == 0))
        this.controlOnChange(null);
      else this.controlOnChange(this.value);
    }
    this.onClick.emit(this.value);
  }

  _onChange() {
    if (this.hasValueAccessor) {
      if (!this.value || (this.value && this.value.length == 0))
        this.controlOnChange(null);
      else this.controlOnChange(this.value);
    }
    this.onChange.emit(this.value);
  }

  _onPanelShow() {
    this.onPanelShow.emit();
  }

  _onPanelHide() {
    this.onPanelHide.emit();
  }
}
