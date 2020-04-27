import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Product } from "src/app/Models/product.model";

@Component({
  selector: "product-price-tab",
  templateUrl: "./product-price-tab.component.html",
  styleUrls: ["./product-price-tab.component.scss"]
})
export class ProductPriceTabComponent implements OnInit {
  constructor() {}
  @Input() product: Product;
  @Output() onChange = new EventEmitter();
  form = new FormGroup({
    price: new FormControl(null),
    discountType: new FormControl(null),
    discountValue: new FormControl(null),
    discountExpireDate: new FormControl(null)
  });
  discountList = [
    {
      label: "بدون تخفیف",
      value: 1
    },
    {
      label: "ثابت",
      value: 1
    },
    {
      label: "درصدی",
      value: 1
    },
  ]

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.onChange.emit(this.form.value);
    });
  }
}
