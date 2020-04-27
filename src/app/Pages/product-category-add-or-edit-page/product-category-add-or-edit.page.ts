import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { DataService } from "src/app/Services/data.service";
import { Category } from "src/app/Models/product.model";
import { Messager } from 'src/app/@custom-elements/service/messager.service';
import { Tree } from 'src/app/@custom-elements/model/tree.model';

@Component({
  selector: "product-category-add-or-edit-page",
  templateUrl: "./product-category-add-or-edit.page.html",
  styleUrls: ["./product-category-add-or-edit.page.scss"]
})
export class ProductCategoryAddOrEditPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    private vcRef: ViewContainerRef,
    private messager: Messager
  ) {}

  pageTitle: string = "افزودن دسته بندی";
  categoryParent: Tree;
  categoryLabel: string;
  categoriesWithRootNode: Tree[] = [];
  treeExtraFields: Tree[] = [];
  selectedExtraFields: Tree[] = [];
  disabled: boolean = false;
  editMode: boolean = false;
  paramId: number;

  ngOnInit() {
    this.paramId = +this.route.snapshot.params["id"];
    this.dataService.getCategories().subscribe(categories => {
      this.categoriesWithRootNode = this.dataService.getTreeModelCategoriesWithRootNode(
        categories.result
      );
      if (this.paramId) {
        this.editMode = true;
        this.dataService.getCategoryById(this.paramId).subscribe(category => {
          this.categoryLabel = category.result.label;
          this.pageTitle = "ویرایش دسته بندی - " + this.categoryLabel;
          this.categoryParent =
            this.dataService.getTreeNodeById(
              this.categoriesWithRootNode,
              category.result.parentId
            ) || this.categoriesWithRootNode[0];
          for (const id of category.result.extraFieldIds) {
            this.dataService.getExtraFieldById(id).subscribe(response => {
              this.selectedExtraFields.push(
                this.dataService.convertExtraFieldToTreeItem(response.result)
              );
            });
          }
          for (let i = 0; i < this.categoryParent.children.length; i++) {
            if (this.categoryParent.children[i].data.id == category.result.id)
              this.categoryParent.children.splice(i, 1);
            this.expanded(this.categoriesWithRootNode, this.categoryParent);
          }
        });
      } else {
        this.editMode = false;
        this.categoryParent = this.categoriesWithRootNode[0];
      }
    });

    this.dataService.getExtraFields().subscribe(extraFields => {
      this.dataService.getExtraFieldGroups().subscribe(extraFieldGroups => {
        this.treeExtraFields = this.dataService.getTreeModelExtraFieldGroups(
          extraFieldGroups.result,
          extraFields.result
        );
      });
    });
  }

  expanded(list, node) {
    if (node.data.id != undefined) {
      let parentNode = this.dataService.getTreeNodeById(
        list,
        node.data.parentId
      );
      parentNode.expanded = true;
      this.expanded(list, parentNode);
    }
  }

  onSaveClick() {
    let category = new Category();
    category.label = this.categoryLabel;
    category.parentId = this.categoryParent.data.id;
    for (const extraField of this.selectedExtraFields)
      if (extraField.data.groupId != undefined)
        category.extraFieldIds.push(extraField.data.id);
    if (this.editMode) {
      category.id = this.paramId;
      this.dataService.updateCategory(category).subscribe(response => {
        this.router.navigate(["/product/category/list"]);
      });
    } else {
      this.dataService.addCategory(category).subscribe();
    }
  }

  onCancelClick() {
    this.dataService.cancellationConfirm(this.vcRef).then(() => {
      this.router.navigate(["/product/category/list"]);
    });
  }
}
