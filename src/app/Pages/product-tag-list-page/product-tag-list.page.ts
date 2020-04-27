import { Component, OnInit, OnChanges } from "@angular/core";

import { DataService } from "src/app/Services/data.service";
import { TagItem } from "src/app/Models/product.model";
import { DialogFormService } from 'src/app/@custom-elements/service/dialog-form.service';
import { TableColumn } from 'src/app/@custom-elements/model/table-column.model';
import { TableAction } from 'src/app/@custom-elements/model/table-action.model';

@Component({
  selector: "product-tag-list-page",
  templateUrl: "./product-tag-list.page.html",
  styleUrls: ["./product-tag-list.page.scss"]
})
export class ProductTagListPage implements OnInit {
  constructor(
    private dataService: DataService,
    private dialogFormService: DialogFormService
  ) {}

  tags: TagItem[];
  columns: TableColumn[] = [
    {
      field: "label",
      header: "عنوان",
      filterType: "",
      type: "string"
    }
  ];
  actions: TableAction[] = [
    {
      tooltip: "ویرایش",
      icon: "fas fa-edit",
      color: "info"
    }
  ];

  ngOnInit() {
    this.loadTags();
  }

  loadTags() {
    this.dataService.getTags().subscribe(response => {
      this.tags = response.result;
    });
  }

  onAddNewTagClick() {
    this.dialogFormService
      .show("افزودن برند", [
        {
          type: "text",
          label: "عنوان",
          labelWidth: 80,
          errors: [{ type: "required", message: "این فیلد الزامی است." }],
          formControlName: "label"
        }
      ])
      .onClose.subscribe(tag => {
        if (tag) {
          this.dataService.addTag(tag).subscribe(() => {
            this.loadTags();
          });
        }
      });
  }

  onActionClick(event) {
    if (event.action == "ویرایش") {
      this.dialogFormService
        .show("ویرایش تگ", [
          {
            type: "hidden",
            formControlName: "id",
            value: event.row.id
          },
          {
            type: "text",
            label: "عنوان",
            labelWidth: 80,
            errors: [{ type: "required", message: "این فیلد الزامی است." }],
            formControlName: "label",
            value: event.row.label
          }
        ])
        .onClose.subscribe((tag: TagItem) => {
          if (tag) {
            this.dataService.updateTag(tag).subscribe();
            this.loadTags();
          }
        });
    }
    if (event.action == "حذف") {
      this.dataService.removeTag(event.row.id).subscribe();
    }
  }
}
