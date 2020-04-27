import { Injectable } from "@angular/core";
import { DialogService, DynamicDialogRef } from "primeng";
import { DynamicFormConfig } from '../model/dynamic-form-config.model';
import { DynamicFormComponent } from '../element/dynamic-form/dynamic-form.component';

@Injectable({
  providedIn: "root"
})
export class DialogFormService {
  constructor(private dialogService: DialogService) {}
  show(header: string, config: DynamicFormConfig[]): DynamicDialogRef {
    return this.dialogService.open(DynamicFormComponent, {
      header: header,
      data: config,
      width: "400px"
    });
  }
}
