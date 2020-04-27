import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  AfterViewInit,
} from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

import { InputBaseComponent } from "../input-base/input-base.component";
import { InputFileMode } from "../../../../@custom-elements/type/input-file-mode.type";
import { FormControl } from '@angular/forms';
import { ErrorModel } from 'src/app/@custom-elements/model/error.model';

@Component({
  selector: "input-file",
  templateUrl: "./input-file.component.html",
  styleUrls: ["./input-file.component.scss"],
})
export class InputFileComponent extends InputBaseComponent implements OnInit , AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  @Input() url: string;
  @Input() multiple: boolean = false;
  @Input() auto: boolean = false;
  @Input() accept: string = "";
  @Input() method: string = "POST";
  @Input() captionText: string = "";
  @Input() maxFileSize: number = null;
  @Input() previewWidth: number = 50;
  @Input() fileLimit: number = null;
  @Input() mode: InputFileMode = "advanced";
  @Input() chooseLabel: string = "انتخاب";
  @Input() uploadLabel: string = "آپلود";
  @Input() cancelLabel: string = "انصراف";
  @Input() files: any[] = [];
  @Input() headers: HttpHeaders;
  @Input() showUploadButton: boolean = true;
  @Input() showCancelButton: boolean = true;
  @Input() invalidFileSizeMessageSummary: string =
    "{0} - سایز فایل نامعتبر است.";
  @Input() invalidFileSizeMessageDetail: string = "حداکثر سایز فایل {0} است.";
  @Input() invalidFileTypeMessageSummary: string =
    "{0} - نوع فایل نامعتبر است.";
  @Input() invalidFileLimitMessageDetail: string =
    "حداکثر مجاز به انتخاب {0} فایل هستید.";
  @Input() invalidFileLimitMessageSummary: string =
    "مجاز به انتخاب فایل بیشتری نیستید.";
  @Input() invalidFileTypeMessageDetail: string = "فرمت مجاز : {0}";
  @Output() onProgress = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onClear = new EventEmitter();
  @Output() onError = new EventEmitter();
  @Output() onBeforeUpload = new EventEmitter();
  @Output() onUpload = new EventEmitter();
  @Output() onSend = new EventEmitter();

  selectedFiles;

  ngOnInit() {
    super.ngOnInit()
  }
  
  ngAfterViewInit() {
    super.ngAfterViewInit()
  }

  _onRemove(event) {
    this.onRemove.emit(event);
  }
  _onSelect(event) {
    this.selectedFiles = event.files;
    this.cd.detectChanges();
    this.onSelect.emit(event);
  }
  _onBeforeUpload(event) {
    this.onBeforeUpload.emit(event);
  }
  _onSend(event) {
    this.onSend.emit(event);
  }
  _onUpload(event) {
    this.onUpload.emit(event);
  }

  _onProgress(event) {
    this.onProgress.emit(event);
  }

  _onClear(event) {
    this.onClear.emit(event);
  }

  _onError(event) {
    this.onError.emit(event);
  }

  /////////////////////////////////// DRAG DROP EXAMPLE //////////////////////////////////
  // timePeriods = [
  //   "Bronze age",
  //   "Iron age",
  //   "Middle ages",
  //   "Early modern period",
  //   "Long nineteenth century"
  // ];
  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  // }
}
