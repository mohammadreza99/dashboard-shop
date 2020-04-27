import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/Services/data.service";
import { Feature } from "src/app/Models/product.model";
import { DialogFormService } from 'src/app/@custom-elements/service/dialog-form.service';
import { TableAction } from 'src/app/@custom-elements/model/table-action.model';
import { TableColumn } from 'src/app/@custom-elements/model/table-column.model';
import { DynamicFormConfig } from 'src/app/@custom-elements/model/dynamic-form-config.model';

@Component({
  selector: "product-features-tab",
  templateUrl: "./product-features-tab.component.html",
  styleUrls: ["./product-features-tab.component.scss"]
})
export class ProductFeaturesTabComponent implements OnInit {
  constructor(
    private dialogFormService: DialogFormService,
    private dataService: DataService
  ) {}

  selectedFeatures: Feature[] = [];
  featuresActions: TableAction[] = this.dataService.generalActions;
  featuresColumns: TableColumn[] = [
    {
      field: "feature",
      header: "عنوان خصیصه",
      filterType: "",
      type: "string"
    },
    {
      field: "value",
      header: "مقدار خصیصه",
      filterType: "",
      type: "string"
    }
  ];
  ngOnInit() {}

  featuresActionClick(event) {
    // let feature = this.product.features[event.row.index - 1];
    // if (event.action == "ویرایش") {
    //   this.editFeature(feature);
    // } else if (event.action == "حذف") {
    //   this.deleteFeature(feature);
    // }
  }

  onAddNewFeature() {
    this.dialogFormService
      .show("خصوصیات محصول", [
        {
          type: "dropdown",
          label: "خصوصیت",
          labelWidth: 80,
          errors: [{ type: "required", message: "این فیلد الزامی است." }],
          formControlName: "feature",
          dropdownItems: [
            {
              label: "رنگ",
              value: "رنگ"
            }
          ]
        },
        {
          type: "dropdown",
          label: "مقدار",
          labelWidth: 80,
          errors: [{ type: "required", message: "این فیلد الزامی است." }],
          formControlName: "value",
          dropdownItems: [
            {
              label: "قرمز",
              value: "قرمز"
            },
            {
              label: "ابی",
              value: "ابی"
            }
          ]
        }
      ])
      .onClose.subscribe(feature => {
        if (feature != null) {
        }
      });
  }

  editFeature(feature) {
    let featureEditForm: DynamicFormConfig[] = [
      {
        type: "dropdown",
        label: "خصوصیت",
        labelWidth: 80,
        errors: [{ type: "required", message: "این فیلد الزامی است." }],
        formControlName: "feature",
        dropdownItems: [
          {
            label: "رنگ",
            value: "رنگ"
          }
        ],
        value: feature.feature
      },
      {
        type: "dropdown",
        label: "مقدار",
        labelWidth: 80,
        errors: [{ type: "required", message: "این فیلد الزامی است." }],
        formControlName: "value",
        dropdownItems: [
          {
            label: "قرمز",
            value: "قرمز"
          },
          {
            label: "ابی",
            value: "ابی"
          }
        ],
        value: feature.value
      }
    ];
    this.dialogFormService
      .show("ویرایش خصوصیت", featureEditForm)
      .onClose.subscribe(feature => {});
  }

  deleteFeature(feature) {}
}
