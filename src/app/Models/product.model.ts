import { BaseItem } from "./string-item.model";

export class Product {
  id: number;
  name: string;
  description: string;
  createDate: Date;
  updateDate: Date;
  releaseDate: Date;
  isActive: boolean;
  mainImage: string;
  count: number;
  price: number;
  stock: string;
  nationalCode: string;
  categoryId: number;
  brand: Brand;
  discount: Discount;
  tags: TagItem[];
  gallery: Gallery[];
  features: ProductFeature[];
  extraFields: ProductExtraField[];
}

export class Category extends BaseItem {
  parentId: number;
  children?: Category[] = [];
  extraFieldIds: number[] = [];
}

export class Gallery {
  id: number;
  fileName: string;
}

export class ExtraField extends BaseItem {
  type: string;
  group: ExtraFieldGroup;
  categoryIds: number[] = [];
  listItems: string[] = [];
}

export class ProductExtraField {
  extraField: ExtraField;
  value: BaseItem;
}
export class Feature extends BaseItem {
  type: string;
  values?: FeatureValue[] = [];
}

export class ProductFeature {
  feature: Feature;
  value: BaseItem;
}

export class FeatureValue extends BaseItem {
  featureId: number;
  colorCode: string;
}

export class Discount {
  id: number;
  value: number;
  expireDate: Date;
  type: string;
}

export class TagItem extends BaseItem {}

export class ExtraFieldGroup extends BaseItem {}

export class Brand extends BaseItem {}
