import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/Services/data.service";
import { Router } from "@angular/router";
import { ExtraFieldGroup } from "src/app/Models/product.model";
import { DialogFormService } from 'src/app/@custom-elements/service/dialog-form.service';
import { TableColumn } from 'src/app/@custom-elements/model/table-column.model';
import { TableAction } from 'src/app/@custom-elements/model/table-action.model';

@Component({
  selector: "product-extra-field-group-list-page",
  templateUrl: "./product-extra-field-group-list.page.html",
  styleUrls: ["./product-extra-field-group-list.page.scss"]
})
export class ProductExtraFieldGroupListPage implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private dialogFormService: DialogFormService
  ) {}

  extraFieldGroups: ExtraFieldGroup[] = [];
  columns: TableColumn[] = [{ field: "label", header: "گروه", type: "string" }];
  actions: TableAction[] = [
    {
      tooltip: "ویرایش مشخصه ها",
      icon: "fas fa-edit",
      color: "info"
    },
    ...this.dataService.generalActions
  ];

  ngOnInit() {
    this.loadExtraFieldGroups();
  }

  loadExtraFieldGroups() {
    this.dataService.getExtraFieldGroups().subscribe(response => {
      this.extraFieldGroups = response.result;
    });
  }

  onAddExtraFieldGroupClick() {
    this.dialogFormService
      .show("افزودن گروه جدید", [
        {
          type: "text",
          label: "عنوان گروه",
          labelWidth: 80,
          errors: [{ type: "required", message: "این فیلد الزامی است." }],
          formControlName: "label"
        }
      ])
      .onClose.subscribe(extraFieldGroup => {
        this.dataService.addExtraFieldGroup(extraFieldGroup).subscribe();
        this.loadExtraFieldGroups();
      });
  }

  onActionClick(event) {
    if (event.action == "ویرایش") {
      this.dialogFormService
        .show("ویرایش نام گروه", [
          {
            type: "hidden",
            formControlName: "id",
            value: event.row.id
          },
          {
            type: "text",
            label: "عنوان گروه",
            labelWidth: 80,
            errors: [{ type: "required", message: "این فیلد الزامی است." }],
            formControlName: "label",
            value: event.row.label
          }
        ])
        .onClose.subscribe((extraFieldGroup: ExtraFieldGroup) => {
          if (extraFieldGroup != null) {
            this.dataService.updateExtraFieldGroup(extraFieldGroup).subscribe();
          }
        });
    } else if (event.action == "ویرایش مشخصه ها") {
      this.router.navigate(["/product/extra-field/list"], {
        queryParams: { groupId: event.row.id, groupLabel: event.row.label }
      });
    }
  }
}
