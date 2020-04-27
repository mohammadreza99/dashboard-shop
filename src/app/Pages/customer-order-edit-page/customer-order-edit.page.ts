import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { DataService } from "src/app/Services/data.service";
import { Order } from "src/app/Models/order.model";
import { Product } from "src/app/Models/product.model";
import { TableColumn } from 'src/app/@custom-elements/model/table-column.model';

@Component({
  selector: "customer-order-edit-page",
  templateUrl: "./customer-order-edit.page.html",
  styleUrls: ["./customer-order-edit.page.scss"]
})
export class CustomerOrderEditPage implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  order = new Order();
  products: Product[] = [];
  columns: TableColumn[] = [
    {
      field: "product",
      header: "محصول"
    },
    {
      field: "cateogry",
      header: "دسته بندی"
    },
    {
      field: "price",
      header: "فی"
    },
    {
      field: "totalPrice",
      header: "قیمت کل"
    }
  ];

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params["id"])
        this.dataService.getOrderById(params["id"]).then(order => {
          this.order = this.dataService.cloneObj(order);
        });
    });
  }
}
