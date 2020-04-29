import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from "primeng";

import { DialogFormComponent } from '../component/dialog-form/dialog-form.component';
import { DialogFormConfig } from '../type/dialog-form-config';

@Injectable({
  providedIn: 'root'
})
export class DialogFormService {

  constructor(private dialogService: DialogService) {}
  show(header: string, config: DialogFormConfig[]): DynamicDialogRef {
    return this.dialogService.open(DialogFormComponent, {
      header: header,
      data: config,
      width: "400px"
    });
  }
}
