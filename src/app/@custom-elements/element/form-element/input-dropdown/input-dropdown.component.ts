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
import { SelectItemGroup, SelectItem } from "primeng/api";

import { InputBaseComponent } from "../input-base/input-base.component";
import { Position } from "../../../type/position.type";
import { FilterMatchMode } from '../../../type/filter-match-mode.type';

@Component({
  selector: "input-dropdown",
  templateUrl: "./input-dropdown.component.html",
  styleUrls: ["./input-dropdown.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDropdownComponent),
      multi: true
    }
  ]
})
export class InputDropdownComponent extends InputBaseComponent
  implements OnInit, AfterViewInit {
  @Input() items: SelectItemGroup[] | SelectItem[] | any[];
  @Input() showClear: boolean = true;
  @Input() field: string = null;
  @Input() panelStyle: string = null;
  @Input() scrollHeight: string = "200px";
  @Input() editable: boolean = false;
  @Input() group: boolean = false;
  @Input() dataKey: string = null;
  @Input() filter: boolean = false;
  @Input() filterMatchMode: FilterMatchMode = "contains";
  @Input() filterBy: string = "label";
  @Input() filterPlaceholder: string = "جستجو";
  @Input() placeholder: string = "انتخاب";
  @Input() resetFilterOnHide: boolean = false;
  @Input() emptyFilterMessage: string = "موردی یافت نشد";
  @Input() autoDisplayFirst: boolean = true;
  @Input() tooltip: any = null;
  @Input() tooltipPos: Position = "top";
  @Output() onShow = new EventEmitter();
  @Output() onHide = new EventEmitter();
  _items: SelectItemGroup[] | SelectItem[] | any[] = []
  selectId: string;
  ngOnInit() {
    super.ngOnInit();
    this.selectId = this.getId();
    if (typeof (this.items[0]) == 'string')
      for (const item of this.items)
        this._items.push(this.createFilterOptions(item));
    else this._items = this.items;
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  _onShow() {
    this.onShow.emit();
  }

  _onHide() {
    this.onHide.emit();
  }

  _onChange() {
    if (this.hasValueAccessor) this.controlOnChange(this.value);
    this.onChange.emit(this.value);
  }
  createFilterOptions(item) {
    let options = [];
    let option;
    option = {
      label: item,
      value: item
    };
    if (option.label == true || option.label == "true") option.label = "بله";
    if (option.label == false || option.label == "false") option.label = "خیر";

    let isDuplicate: boolean = false;
    for (const o of options) if (o.label == option.label) isDuplicate = true;
    if (!isDuplicate) options.push(option);
    return options;
  }
}
