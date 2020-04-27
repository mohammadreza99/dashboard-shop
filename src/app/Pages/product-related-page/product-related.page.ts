import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/Services/data.service";
import { Product } from "src/app/Models/product.model";
import { Messager } from 'src/app/@custom-elements/service/messager.service';
import { TableColumn } from 'src/app/@custom-elements/model/table-column.model';
import { TableAction } from 'src/app/@custom-elements/model/table-action.model';

@Component({
  selector: "product-related-page",
  templateUrl: "./product-related.page.html",
  styleUrls: ["./product-related.page.scss"]
})
export class ProductRelatedPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    private vcRef: ViewContainerRef,
    private messager: Messager
  ) {}

  pageTitle: string = "محصولات مرتبط";
  selectedCategory;
  products: any[] = [{}];
  columns: TableColumn[] = [
    {
      field: "code",
      header: "کد",
      filterType: "input",
      type: "string"
    },
    {
      field: "title",
      header: "عنوان",
      filterType: "input",
      type: "string"
    }
  ];
  actions: TableAction[] = [
    { tooltip: "انتخاب محصولات مرتبط", icon: "fas fa-pencil", color: "info" }
  ];

  ngOnInit() {}

  onActionClick(event) {
    this.dataService
  }
}
