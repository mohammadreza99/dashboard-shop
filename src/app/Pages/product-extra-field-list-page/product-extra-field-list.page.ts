import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { DataService } from "src/app/Services/data.service";
import { ExtraField, ExtraFieldGroup } from "src/app/Models/product.model";
import { TableColumn } from "src/app/@custom-elements/model/table-column.model";
import { TableAction } from "src/app/@custom-elements/model/table-action.model";

@Component({
  selector: "product-extra-field-list-page",
  templateUrl: "./product-extra-field-list.page.html",
  styleUrls: ["./product-extra-field-list.page.scss"],
})
export class ProductExtraFieldListPage implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  extraFields: ExtraField[] = [];
  columns: TableColumn[] = [
    { field: "label", header: "گروه", type: "string", filterType: "dropdown" },
  ];
  actions: TableAction[] = this.dataService.generalActions;
  pageTitle: string;
  group: ExtraFieldGroup;

  ngOnInit(): void {
    this.group = {
      id: this.route.snapshot.queryParams["groupId"],
      label: this.route.snapshot.queryParams["groupLabel"],
    };
    this.dataService
      .getExtraFieldsByGroupId(this.group.id)
      .subscribe((response) => {
        this.extraFields = response.result;
      });
  }

  onActionClick(event) {
    if (event.action == "ویرایش") {
      this.router.navigate(["/product/extra-field/edit", event.row.id]);
    } else if (event.action == "حذف") {
    }
  }
}
