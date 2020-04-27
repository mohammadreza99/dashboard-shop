import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { DataService } from "src/app/Services/data.service";
import { Customer } from "src/app/Models/customer.model";
import { TableColumn } from 'src/app/@custom-elements/model/table-column.model';
import { TableAction } from 'src/app/@custom-elements/model/table-action.model';

@Component({
  selector: "customer-list-page",
  templateUrl: "./customer-list.page.html",
  styleUrls: ["./customer-list.page.scss"]
})
export class CustomerListPage implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.dataService.getCustomersByGroup(params["id"]).then(list => {
        this.customers = this.dataService.cloneObj(list);
      });
    });
  }

  customers: Customer[];
  columns: TableColumn[] = [
    {
      field: "firstName",
      header: "نام",
      filterType: "input",
      type: "string"
    },
    {
      field: "lastName",
      header: "نام خانوادگی",
      filterType: "input",
      type: "string"
    },
    {
      field: "registerDate",
      header: "تاریخ عضویت",
      type: "moment"
    }
  ];
  actions: TableAction[] = [
    { tooltip: "لیست سفارشات", icon: "fas fa-list", color: "secondary" },
    { tooltip: "ویرایش", icon: "fas fa-pencil", color: "info" },
    { tooltip: "ارسال ایمیل", icon: "fas fa-envelope", color: "info" },
    { tooltip: "ارسال پیامک", icon: "fas fa-sms", color: "info" }
  ];

  ngOnInit() {}

  onActionClick(event) {
    if (event.action == "لیست سفارشات") {
      this.router.navigate(["/customer/order/list", event.row.id]);
    } else if (event.action == "ویرایش") {
      this.router.navigate(["/customer/edit", event.row.id]);
    } else if (event.action == "ارسال ایمیل") {
      this.router.navigate(["/customer/send-email", event.row.id]);
    } else if (event.action == "ارسال پیامک") {
      this.router.navigate(["/customer/send-sms", event.row.id]);
    } else if (event.action == "حذف") {
      // this.dataService.removeProduct(event.row).then(updatedList => {
      //   this.customers = updatedList;
      // });
    }
  }
}
