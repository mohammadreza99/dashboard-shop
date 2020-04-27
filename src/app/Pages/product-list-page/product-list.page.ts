import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "src/app/Services/data.service";
import { Product } from "src/app/Models/product.model";
import { DialogFormService } from 'src/app/@custom-elements/service/dialog-form.service';
import { CTableComponent } from 'src/app/@custom-elements/element/c-table/c-table.component';
import { TableColumn } from 'src/app/@custom-elements/model/table-column.model';
import { TableAction } from 'src/app/@custom-elements/model/table-action.model';

@Component({
  selector: "product-list-page",
  templateUrl: "./product-list.page.html",
  styleUrls: ["./product-list.page.scss"]
})
export class ProductListPage implements OnInit {
  constructor(
    private dataService: DataService,
    private dialogFormService: DialogFormService,
    private router: Router
  ) {}
  @ViewChild(CTableComponent, { static: true }) cTable: CTableComponent;

  products: Product[];
  columns: TableColumn[] = [
    {
      field: "nationalCode",
      header: "کد",
      filterType: "input",
      type: "string"
    },
    {
      field: "name",
      header: "عنوان",
      filterType: "input",
      type: "string"
    },
    // {
    //   field: "categoryName",
    //   header: "دسته بندی",
    //   filterType: "multiSelect",
    //   type: "string"
    // },
    // {
    //   field: "price",
    //   header: "قیمت",
    //   filterType: "range",
    //   type: "string"
    // },
    // {
    //   field: "stock",
    //   header: "وضعیت",
    //   filterType: "multiSelect",
    //   type: "string"
    // },
    // {
    //   field: "isActive",
    //   header: "وضعیت انتشار",
    //   filterType: "dropdown",
    //   type: "boolean"
    // }
  ];
  actions: TableAction[] = [
    { tooltip: "ایجاد کپی", icon: "fas fa-copy", color: "secondary" },
    { tooltip: "ویرایش", icon: "fas fa-pencil", color: "info" }
  ];

  ngOnInit() {
    this.dataService.getProducts().subscribe(response => {
      this.products = response.result;
    });
  }

  onActionClick(event) {
    if (event.action == "ویرایش") {
      this.router.navigate(["/product/edit", event.row.id]);
    } else if (event.action == "حذف") {
    } else if (event.action == "ایجاد کپی") {
      this.dialogFormService.show("کپی محصول", [
        {
          type: "dropdown",
          label: "کپی به شاخه",
          formControlName: "category",
          dropdownItems: [],
          errors: [{ type: "required", message: "این فیلد الزامی است" }]
        }
      ]);
    }
  }
}
