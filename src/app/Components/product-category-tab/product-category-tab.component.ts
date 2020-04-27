import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Product } from "src/app/Models/product.model";
import { DataService } from 'src/app/Services/data.service';
import { Tree } from 'src/app/@custom-elements/model/tree.model';

@Component({
  selector: "product-category-tab",
  templateUrl: "./product-category-tab.component.html",
  styleUrls: ["./product-category-tab.component.scss"]
})
export class ProductCategoryTabComponent implements OnInit {
  constructor(private dataService: DataService) {}
  @Input() product: Product;
  @Output() onChange = new EventEmitter();

  treeCategories: Tree[];
  selectedCategory: Tree;

  ngOnInit() {
    this.dataService.getCategories().subscribe(response => {
      this.treeCategories = this.dataService.setParentCategoriesUnselectable(
        this.dataService.getTreeModelCategories(response.result)
      );
    });
  }

  onCategorySelect(event) {
    this.onChange.emit(event.data.id);
    // this.allExtraFields = [];
    // this.dataService
    //   .getExtraFieldsByCategoryId(event.data.id)
    //   .subscribe(response => {
    //     for (const id of response.result) {
    //       this.dataService.getExtraFieldById(id).subscribe(extraField => {
    //         this.allExtraFields.push(
    //           this.dataService.convertExtraFieldToTreeItem(extraField.result)
    //         );
    //       });
    //     }
    //   });
  }
}
