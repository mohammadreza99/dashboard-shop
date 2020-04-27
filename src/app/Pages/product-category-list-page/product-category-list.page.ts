import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "src/app/Services/data.service";
import { Observable } from "rxjs";
import { TreeTable } from 'src/app/@custom-elements/model/tree-table.model';
import { TableColumn } from 'src/app/@custom-elements/model/table-column.model';
import { TableAction } from 'src/app/@custom-elements/model/table-action.model';

@Component({
  selector: "product-category-list-page",
  templateUrl: "./product-category-list.page.html",
  styleUrls: ["./product-category-list.page.scss"]
})
export class ProductCategoryListPage implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private vcRef: ViewContainerRef
  ) {}

  treeTableCategories: TreeTable[] = [];
  columns: TableColumn[] = [
    { field: "label", header: "عنوان", type: "string", filterType: "dropdown" }
  ];
  actions: TableAction[] = this.dataService.generalActions;

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.dataService.getCategories().subscribe(response => {
      this.treeTableCategories = this.dataService.getTreeTableModelCategories(
        response.result
      );
    });
  }

  onActionClick(event) {
    if (event.action == "ویرایش") {
      this.router.navigate(["/product/category/edit", event.row.id]);
    } else if (event.action == "حذف") {
      this.dataService.removeCategory(event.row.id).subscribe();
      this.loadCategories();
    }
  }
}
