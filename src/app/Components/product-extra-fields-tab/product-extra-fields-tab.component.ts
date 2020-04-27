import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Tree } from 'src/app/@custom-elements/model/tree.model';

@Component({
  selector: "product-extra-fields-tab",
  templateUrl: "./product-extra-fields-tab.component.html",
  styleUrls: ["./product-extra-fields-tab.component.scss"]
})
export class ProductExtraFieldsTabComponent implements OnInit {
  constructor() {}
  allExtraFields: Tree[] = [];
  selectedExtraFields: Tree;
  form = new FormGroup({});
  ngOnInit() {}
}
