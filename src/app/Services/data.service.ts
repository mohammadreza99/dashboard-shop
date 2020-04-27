import { Injectable, ViewContainerRef } from "@angular/core";
import * as moment from "jalali-moment";
import { MenuItem } from "primeng/api";
import { Category, Brand, FeatureValue } from "../Models/product.model";
import { Product } from "../Models/product.model";
import { Feature } from "../Models/product.model";
import { ItemValidationCheck } from "../Models/item-validation-check.model";
import { ExtraFieldGroup } from "../Models/product.model";
import { ExtraField } from "../Models/product.model";
import { Customer } from "../Models/customer.model";
import { Order } from "../Models/order.model";
import { CustomerGroup } from "../Models/customer-group.model";
import { TagItem } from "../Models/product.model";
import { State } from "../Models/state.model";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../app.constants";
import { ResponseModel } from "../Models/response.model";
import { Observable, Observer, fromEvent, merge, throwError, of } from "rxjs";
import { map, switchMap, catchError, filter } from "rxjs/operators";
import { Messager } from "../@custom-elements/service/messager.service";
import { Confirmer } from "../@custom-elements/service/confirmer.service";
import { Toaster } from "../@custom-elements/service/toaster.service";
import { Tree } from "../@custom-elements/model/tree.model";
import { TableAction } from "../@custom-elements/model/table-action.model";
import { TreeTable } from "../@custom-elements/model/tree-table.model";
import { PaymentMethod } from "../Enums/payment-method.enum";
import { PostingMethod } from "../Enums/posting-method.enum";
import { OrderStatus } from "../Enums/order-status.enum";

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(
    private messager: Messager,
    private confirmer: Confirmer,
    private toaster: Toaster,
    private http: HttpClient
  ) {}
  /////////////////////////////////////////////////////////////////////////////
  //                                ORDER                                    //
  /////////////////////////////////////////////////////////////////////////////
  // #region ORDER

  private _orders: Order[] = [
    {
      id: "0",
      trackingCode: "md-1024",
      address: {
        id: "0",
        state: "تهران",
        city: "تهران",
        postalAddress: "خیابان شریعتی میدان قبا",
        postalCode: "1234567890",
      },
      customerId: "0",
      date: moment(),
      price: 20000,
      postingPrice: 1000,
      discount: 0,
      totalPrice: 21000,
      paymentMethod: PaymentMethod.InPlace,
      postingMethod: PostingMethod.Post,
      status: OrderStatus.Canceled,
      discription: "",
      products: [
        {
          count: 2,
          productId: "1",
        },
      ],
    },
  ];

  get orders(): Promise<Order[]> {
    return Promise.resolve(this._orders);
  }

  getOrderById(id: string): Promise<Order> {
    return Promise.resolve(this._orders.find((o) => o.id == id));
  }

  // #endregion ORDER
  /////////////////////////////////////////////////////////////////////////////
  //                               CUSTOMER                                  //
  /////////////////////////////////////////////////////////////////////////////
  // #region CUSTOMER

  private _customers: Customer[] = [
    {
      id: "0",
      groupId: "1",
      firstName: "سولماز",
      lastName: "شکری",
      birthDate: moment(),
      registerDate: moment(),
      gender: "female",
      nationalCode: "111222",
      email: "solmaz@gmail.com",
      address: {
        id: "0",
        state: "تهران",
        city: "تهران",
        postalAddress: "خیابان شریعتی میدان قبا",
        postalCode: "1234567890",
      },
      mobile: "09122222222",
      phone: "02188888888",
      password: "1234",
      subscription: true,
    },
    {
      id: "1",
      groupId: "2",
      firstName: "محمدرضا",
      lastName: "شهبازی",
      birthDate: moment(),
      registerDate: moment(),
      gender: "male",
      nationalCode: "111222",
      email: "solmaz@gmail.com",
      address: {
        id: "0",
        state: "تهران",
        city: "تهران",
        postalAddress: "خیابان شریعتی میدان قبا",
        postalCode: "1234567890",
      },
      mobile: "09122222222",
      phone: "02188888888",
      password: "1234",
      subscription: false,
    },
  ];
  private _customerGroups: CustomerGroup[] = [
    {
      id: 1,
      label: "پیش فرض",
    },
    {
      id: 2,
      label: "ویژه",
    },
  ];
  private _states: State[] = [
    {
      label: "آذربايجان شرقي",
      parentId: null,
      id: "b6d2fee3-7b8b-45ce-b24f-a8e75e056eb6",
    },
    {
      label: "آذربايجان غربي",
      parentId: null,
      id: "0bd5ae58-3fc2-452e-8c9f-25a6947e8665",
    },
    {
      label: "اردبيل",
      parentId: null,
      id: "a9a0bd66-79e2-4518-8774-4b25f2003b98",
    },
    {
      label: "اصفهان",
      parentId: null,
      id: "2a794383-0154-4a04-a0f9-374a1e04895b",
    },
    {
      label: "البرز",
      parentId: null,
      id: "26d227a5-c7e5-4427-90b4-a49a7c83ce9b",
    },
    {
      label: "ايلام",
      parentId: null,
      id: "68aa98d7-c4a1-47d0-a38d-53ca0d1231f6",
    },
    {
      label: "بوشهر",
      parentId: null,
      id: "18d797d4-377f-4d70-8bc6-2396741cc50a",
    },
    {
      label: "تهران",
      parentId: null,
      id: "c4e9a107-0dc9-42f0-b9f2-03dbb654503c",
    },
    {
      label: "چهارمحال و بختياري",
      parentId: null,
      id: "e0efa4d4-a6c5-4df1-99b0-e1ce0025c1fd",
    },
    {
      label: "خراسان جنوبي",
      parentId: null,
      id: "c000758a-af3d-425d-b3ac-0ad1ae812d00",
    },
    {
      label: "خراسان رضوي",
      parentId: null,
      id: "7c6fba7d-803b-4b0f-9929-10f28e80ab7d",
    },
    {
      label: "خراسان شمالي",
      parentId: null,
      id: "81fe9562-246e-4e57-a22d-78395fc6e3fe",
    },
    {
      label: "خوزستان",
      parentId: null,
      id: "14d01e50-bb1e-4bec-a994-8d91e2ad4185",
    },
    {
      label: "زنجان",
      parentId: null,
      id: "1efc77f8-3787-418d-bc8c-4fb1e2fb4aa5",
    },
    {
      label: "سمنان",
      parentId: null,
      id: "4cccb5b7-8220-4933-b251-0b025205b836",
    },
    {
      label: "سيستان و بلوچستان",
      parentId: null,
      id: "2f92d803-fbbc-49e9-a0eb-ebe5bf2b99de",
    },
    {
      label: "فارس",
      parentId: null,
      id: "173e87ce-761f-46fe-91c2-819a8615e53a",
    },
    {
      label: "قزوين",
      parentId: null,
      id: "0d3cc539-3142-4371-a3f9-09773e02b35c",
    },
    { label: "قم", parentId: null, id: "18f184ae-a010-47de-9ae0-f761e9e1f6d8" },
    {
      label: "كردستان",
      parentId: null,
      id: "9047a2f4-11db-4131-85ef-9c1f57135d53",
    },
    {
      label: "كرمان",
      parentId: null,
      id: "842d53ca-1f19-465f-900c-495786e4c373",
    },
    {
      label: "كرمانشاه",
      parentId: null,
      id: "99f9311f-4ccb-49e6-9b7c-158ec0778525",
    },
    {
      label: "كهگيلويه وبويراحمد",
      parentId: null,
      id: "c811b946-aa70-4462-8a67-5d7cb0cbe5d7",
    },
    {
      label: "گلستان",
      parentId: null,
      id: "244fabca-8b38-43ef-a312-203b9cf2b69e",
    },
    {
      label: "گيلان",
      parentId: null,
      id: "dae50e8f-dabe-4744-adc8-20bcfe1192a8",
    },
    {
      label: "لرستان",
      parentId: null,
      id: "efa8e491-eec7-44e7-af89-4766b5196343",
    },
    {
      label: "مازندران",
      parentId: null,
      id: "d18c9c3d-ebbf-45c1-8f84-5ad043685fe2",
    },
    {
      label: "مركزي",
      parentId: null,
      id: "817b090c-0f98-4981-bfbb-d81105ea388e",
    },
    {
      label: "هرمزگان",
      parentId: null,
      id: "bdaff093-01fa-449b-9611-7e7c1c9dffd0",
    },
    {
      label: "همدان",
      parentId: null,
      id: "13b507e4-1bdd-47e7-b10b-3605fb7d377e",
    },
    {
      label: "يزد",
      parentId: null,
      id: "5003372a-45c2-462b-ac9c-8f088adfc2f3",
    },
  ];

  get customers(): Promise<Customer[]> {
    return Promise.resolve(this._customers);
  }

  get customerGroups(): Promise<CustomerGroup[]> {
    return Promise.resolve(this._customerGroups);
  }

  getCustomerById(id: string): Promise<Customer> {
    return Promise.resolve(this._customers.find((c: Customer) => c.id == id));
  }

  getCustomersByGroup(groupId): Promise<Customer[]> {
    return Promise.resolve(this._customers.filter((c) => c.groupId == groupId));
  }

  getCustomersCountOfGroup(groupId) {
    return this._customers.filter((c) => c.groupId == groupId).length;
  }

  get states() {
    return this._states;
  }

  //#endregion CUSTOMER
  /////////////////////////////////////////////////////////////////////////////
  //                                PRODUCT                                  //
  /////////////////////////////////////////////////////////////////////////////
  // #region PRODUCT

  getProducts(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<ResponseModel>(`${API_URL}/products/${id}`).pipe(
      switchMap((response) =>
        response.errorMessages
          ? throwError(response.errorMessages)
          : of(response.result)
      ),
      catchError((err) => {
        //doooo
        return throwError(err);
      })
    );
  }

  addProduct(product: Product): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_URL}/products`, product);
  }

  updateProduct(product: Product): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(
      `${API_URL}/products/${product.id}`,
      product
    );
  }

  removeProduct(product: Product): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${API_URL}/products/${product.id}`);
  }

  getDiscountTypes(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/products/getDiscountTypes`);
  }

  //#endregion PRODUCT
  /////////////////////////////////////////////////////////////////////////////
  //                                FEATURE                                  //
  /////////////////////////////////////////////////////////////////////////////
  // #region FEATURE

  getFeatures(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/features`);
  }

  getFeatureById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/features/${id}`);
  }

  addFeature(feature: Feature): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_URL}/features`, feature);
  }

  updateFeature(feature: Feature): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(
      `${API_URL}/features/${feature.id}`,
      feature
    );
  }

  removeFeature(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${API_URL}/features/${id}`);
  }

  getFeatureTypes(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/features/getFeatureTypes`);
  }

  addFeatureValue(featureValue: FeatureValue): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(
      `${API_URL}/featureValues`,
      featureValue
    );
  }

  updateFeatureValue(featureValue: Feature): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(
      `${API_URL}/featureValues/${featureValue.id}`,
      featureValue
    );
  }

  removeFeatureValue(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${API_URL}/featureValues/${id}`);
  }

  //#endregion FEATURE
  /////////////////////////////////////////////////////////////////////////////
  //                           EXTRA FIELDS GROUPS                           //
  /////////////////////////////////////////////////////////////////////////////
  // #region EXTRA FIELDS GROUPS

  getExtraFieldGroups(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/extraFieldGroups`);
  }

  getExtraFieldGroupById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/extraFieldGroups/${id}`);
  }

  addExtraFieldGroup(
    extraFieldGroup: ExtraFieldGroup
  ): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(
      `${API_URL}/extraFieldGroups`,
      extraFieldGroup
    );
  }

  updateExtraFieldGroup(
    extraFieldGroup: ExtraFieldGroup
  ): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(
      `${API_URL}/extraFieldGroups/${extraFieldGroup.id}`,
      extraFieldGroup
    );
  }

  removeExtraFieldGroup(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${API_URL}/extraFieldGroups/${id}`);
  }

  getTreeModelExtraFieldGroups(
    extraFieldGroups: ExtraFieldGroup[],
    extraFields: ExtraField[]
  ): Tree[] {
    return this.convertExtraFieldGroupsToTreeArray(
      extraFieldGroups,
      extraFields
    );
  }

  getTreeTableModelExtraFieldGroups(
    extraFieldGroups: ExtraFieldGroup[],
    extraFields: ExtraField[]
  ): TreeTable[] {
    return this.convertExtraFieldGroupsToTreeTableArray(
      extraFieldGroups,
      extraFields
    );
  }

  convertExtraFieldGroupsToTreeArray(
    extraFieldGroups: ExtraFieldGroup[],
    extraFields: ExtraField[]
  ): Tree[] {
    let result: Tree[] = [];
    for (const item of extraFieldGroups)
      result.push({
        label: item.label,
        data: { id: item.id, parentId: undefined },
        children: this.getExtraFieldGroupChildren(extraFields, item, "tree"),
        key: item.id.toString() + "g",
      });
    return result;
  }

  convertExtraFieldGroupsToTreeTableArray(
    extraFieldGroups: ExtraFieldGroup[],
    extraFields: ExtraField[]
  ): TreeTable[] {
    let result: TreeTable[] = [];
    for (const item of extraFieldGroups)
      result.push({
        data: {
          label: item.label,
          id: item.id,
        },
        children: this.getExtraFieldGroupChildren(
          extraFields,
          item,
          "treeTable"
        ),
      });
    return result;
  }

  getExtraFieldGroupChildren(
    extraFields: ExtraField[],
    item: ExtraFieldGroup,
    type: "tree" | "treeTable"
  ): Tree[] {
    let result = [];
    for (const e of extraFields) {
      this.getExtraFieldById(e.id).subscribe((child) => {
        if (item.id == child.result.groupId)
          if (type == "tree")
            result.push({
              label: child.result.label,
              data: { id: child.result.id, groupId: child.result.groupId },
              key: child.result.id.toString() + "e",
            });
          else if (type == "treeTable")
            result.push({
              data: { id: child.result.id, label: child.result.label },
            });
      });
    }
    return result;
  }

  //#endregion EXTRA FIELD GROUPS
  /////////////////////////////////////////////////////////////////////////////
  //                              EXTRA FIELDS                               //
  /////////////////////////////////////////////////////////////////////////////
  // #region EXTRA FIELDS

  getExtraFields(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/extraFields`);
  }

  getExtraFieldById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/extraFields/${id}`);
  }

  addExtraField(extraField: ExtraField): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_URL}/extraFields`, extraField);
  }

  updateExtraField(extraField: ExtraField): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(
      `${API_URL}/extraFields/${extraField.id}`,
      extraField
    );
  }

  removeExtraField(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${API_URL}/featureValues/${id}`);
  }

  getExtraFieldsByGroupId(groupId: number) {
    return this.http.get<ResponseModel>(
      `${API_URL}/extraFields/getByGroupId/${groupId}`
    );
  }

  convertExtraFieldToTreeItem(extraField: ExtraField): Tree {
    let result: Tree = {
      label: extraField.label,
      data: { id: extraField.id, groupId: extraField.group.id },
      key: extraField.id.toString() + "e",
    };
    return result;
  }

  getExtraFieldsByCategoryId(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(
      `${API_URL}/extraFields/getExtraFieldsByCategoryId/${id}`
    );
  }

  getExtraFieldTypes(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(
      `${API_URL}/extraFields/getExtraFieldTypes`
    );
  }

  //#endregion EXTRA FIELDS
  /////////////////////////////////////////////////////////////////////////////
  //                                CATEGORY                                 //
  /////////////////////////////////////////////////////////////////////////////
  // #region CATEGORY

  getCategories(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/categories`);
  }

  getTreeModelCategoriesWithRootNode(categories: Category[]): Tree[] {
    let treeCategories = this.getTreeModelCategories(categories);
    let rootNode: Tree = {
      label: "شاخه اصلی",
      data: { id: null, parentId: null },
      children: treeCategories,
      expanded: true,
      key: "root",
    };
    return [rootNode];
  }

  getCategoryById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/categories/${id}`);
  }

  addCategory(category: Category): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_URL}/categories`, category);
  }

  updateCategory(category: Category): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(
      `${API_URL}/categories/${category.id}`,
      category
    );
  }

  removeCategory(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${API_URL}/categories/${id}`);
  }

  getTreeModelCategories(categories: Category[]): Tree[] {
    return this.convertCategoriesToTreeArray(
      this.getGroupedCategories(categories)
    );
  }

  getTreeTableModelCategories(categories: Category[]): TreeTable[] {
    return this.convertCategoriesToTreeTableArray(
      this.getGroupedCategories(categories)
    );
  }

  /**
   * @param list : یه لیستی از جنس تیری
   * @param id : آیدیِ یکی از بچه های همون لیست. فارغ از اینکه این بچه توی کدوم سطح از تیری باشه
   * @return : اون بچه رو توی هر عمقی از درخت باشه پیدا میکنه و برمیگردونه
   */
  getTreeNodeById(list: Tree[], id: number): Tree {
    for (const c of list)
      if (c.data.id == id) return c;
      else if (c.children)
        if (this.getTreeNodeById(c.children, id))
          return this.getTreeNodeById(c.children, id);
  }

  convertCategoryToTreeItem(groupedCategories: Category[], category: Category) {
    let result: Tree = {
      label: category.label,
      data: {
        id: category.id,
        parentId: category.parentId,
        children: category.children,
      },
      children: this.getCategoryChildrenByType(
        groupedCategories,
        category,
        "tree"
      ),
      key: category.id.toString() + "c",
    };
    return result;
  }

  convertCategoriesToTreeArray(groupedCategories: Category[]): Tree[] {
    let result: Tree[] = [];
    for (const item of groupedCategories) {
      if (item.parentId == undefined)
        result.push({
          label: item.label,
          data: {
            id: item.id,
            parentId: item.parentId,
            children: item.children,
          },
          children: this.getCategoryChildrenByType(
            groupedCategories,
            item,
            "tree"
          ),
          key: item.id.toString() + "c",
        });
    }
    return result;
  }

  convertCategoriesToTreeTableArray(
    groupedCategories: Category[]
  ): TreeTable[] {
    let result: TreeTable[] = [];
    for (const item of groupedCategories)
      if (item.parentId == undefined)
        result.push({
          data: {
            label: item.label,
            id: item.id,
            parentId: item.parentId,
          },
          children: this.getCategoryChildrenByType(
            groupedCategories,
            item,
            "treeTable"
          ),
        });
    return result;
  }

  /**
   * @params categories : ارایه ای از کتگوری ها که گروهبندی نشدن . یعنی پراپرتیِ چیلدرنِ اونا هنوز پر نشده
   * @return : همون لیستی که بعنوان ورودی میگیره رو بصورت گروهبندی شده برمیگردونه . یعنی بچه ها رو از اون لیست ورودی پیدا میکنه و میزاره توی پراپرتیِ چیلدرنِ باباشون و برمیگردونه
   */
  getGroupedCategories(categories: Category[]): Category[] {
    let _categories = this.cloneObj(categories);
    let result: Category[] = [];
    for (const category of _categories) {
      let id = category.id;
      Object.assign(category, { children: [] });
      for (const c of _categories)
        if (c.parentId == id) category.children.push(c);
    }
    return _categories;
  }

  /**
   * @params categories : ارایه ای از کتگوری ها که گروهبندی نشدن . یعنی پراپرتیِ چیلدرنِ اونا هنوز پر نشده.
   * @params category : ابجکتی که توی همون لیست ورودی قرار داره و بالطبع بچه های اینم توی پراپرتیِ چیلدرنش قرار ندارن
   * @return : ابجکت کتگوری ای که بعنوان ورودی میگیره رو از اون لیست ورودی پیدا میکنه و بچه هاشون از همون لیست میگرده و میزاره توی پراپرتیِ چیلدرنِ ابجکته و ابجکته رو برمیگردونه
   */
  getCategoryWithChildren(
    groupedCategories: Category[],
    category: Category
  ): Category {
    let _categories = this.cloneObj(groupedCategories);
    let id = category.id;
    Object.assign(category, { children: [] });
    for (const c of _categories)
      if (c.parentId == id) category.children.push(c);
    return category;
  }

  /**
   * یه کتگوری میگیره و لیست بچه های اونو متناسب با تایپی که میگیره، برمیگردونه.
   */
  getCategoryChildrenByType(
    groupedCategories: Category[],
    category: Category,
    type: "tree" | "treeTable" | "category" = "category"
  ): Tree[] | TreeTable[] | Category[] {
    let result = [];
    if (category.children && category.children.length != 0)
      for (const c of category.children) {
        let child: Category;
        child = this.getCategoryWithChildren(groupedCategories, c);
        if (type == "tree") {
          result.push({
            label: child.label,
            data: {
              id: child.id,
              parentId: child.parentId,
              children: child.children,
            },
            children: this.getCategoryChildrenByType(
              groupedCategories,
              child,
              "tree"
            ),
          });
        } else if (type == "treeTable") {
          result.push({
            data: {
              label: child.label,
              id: child.id,
              parentId: child.parentId,
            },
            children: this.getCategoryChildrenByType(
              groupedCategories,
              child,
              "treeTable"
            ),
          });
        } else if (type == "category") {
          result.push(
            child,
            ...this.getCategoryChildrenByType(
              groupedCategories,
              child,
              "category"
            )
          );
        }
      }
    return result;
  }

  setParentCategoriesUnselectable(categories: Tree[]): Tree[] {
    for (const c of categories) {
      Object.assign(c, { selectable: c.children.length != 0 ? false : true });
      if (c.children.length != 0)
        c.children = this.setParentCategoriesUnselectable(c.children);
    }
    return categories;
  }

  //#endregion CATEGORY
  /////////////////////////////////////////////////////////////////////////////
  //                                  TAGS                                   //
  /////////////////////////////////////////////////////////////////////////////
  // #region TAGS

  getTags(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/tags`);
  }

  getTagById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/tags/${id}`);
  }

  addTag(tag: TagItem): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_URL}/tags`, tag);
  }

  updateTag(tag: TagItem): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(`${API_URL}/tags/${tag.id}`, tag);
  }

  removeTag(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${API_URL}/tags/${id}`);
  }

  // #endregion TAGS
  /////////////////////////////////////////////////////////////////////////////
  //                                BRANDS                                   //
  /////////////////////////////////////////////////////////////////////////////
  // #region BRANDS

  getBrands(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/brands`);
  }

  getBrandById(id: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_URL}/brands/${id}`);
  }

  addBrand(brand: Brand): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_URL}/brands`, brand);
  }

  updateBrand(brand: Brand): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(`${API_URL}/brands/${brand.id}`, brand);
  }

  removeBrand(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${API_URL}/brands/${id}`);
  }

  //#endregion BRANDS
  /////////////////////////////////////////////////////////////////////////////
  //                                GENERAL                                  //
  /////////////////////////////////////////////////////////////////////////////
  //#region GENERAL
  private _sideMenuItems: MenuItem[] = [
    {
      label: "داشبورد",
      icon: "pi pi-pw pi-file",
      routerLink: ["/home"],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: "محصولات",
      icon: "pi pi-pw pi-file",
      items: [
        {
          label: "لیست محصولات",
          routerLink: ["/product/list"],
        },
        {
          label: "دسته بندی",
          routerLink: ["/product/category"],
        },
        {
          label: "خصوصیات",
          routerLink: ["/product/feature"],
        },
        {
          label: "مشخصات اضافی",
          routerLink: ["/product/extra-field-group"],
        },
        {
          label: "نقد و بررسی",
          routerLink: ["/product/review"],
        },
        {
          label: "محصولات مرتبط",
          routerLink: ["/product/related"],
        },
        {
          label: "برند ها",
          routerLink: ["/product/brand"],
        },
        {
          label: "تگ ها",
          routerLink: ["/product/tag"],
        },
        {
          label: "در صف انتظار",
          routerLink: ["/product/in-queue"],
        },
      ],
    },
    {
      label: "مشتری ها",
      icon: "pi pi-pw pi-file",
      items: [
        { label: "لیست مشتری ها", routerLink: ["/customer/group/list"] },
        { label: "سفارشات", routerLink: ["/customer/order/list"] },
      ],
    },
    {
      label: "خبرنامه",
      icon: "pi pi-pw pi-file",
      items: [
        { label: "مدیریت خبرنامه", routerLink: "newsletters/management" },
        { label: "مشترکین خبرنامه", routerLink: "newsletters/subscribers" },
      ],
    },
    {
      label: "مدیریت",
      icon: "pi pi-pw pi-file",
      items: [
        { label: "لیست همکاران", routerLink: "management/list" },
        { label: "نقش ها", routerLink: "management/roles" },
        { label: "سطح دسترسی", routerLink: "management/access-level" },
      ],
    },
    {
      label: "گزارشات",
      icon: "pi pi-pw pi-file",
      items: [
        { label: "محصولات موجود", routerLink: "reports/available-products" },
        {
          label: "محصولات ناموجود",
          routerLink: "reports/unavailable-products",
        },
        {
          label: "محصولات خریداری نشده",
          routerLink: "reports/not-purchased-products",
        },
        { label: "درآمد فروشگاه", routerLink: "reports/store-income" },
        { label: "عملکرد مدیران", routerLink: "reports/managers-performance" },
      ],
    },
    {
      label: "تنظیمات",
      icon: "pi pi-pw pi-file",
      items: [
        { label: "تنظیمات عمومی", routerLink: "setting/general" },
        { label: "ارسال پیام", routerLink: "setting/send-message" },
        { label: "صفحات ثابت", routerLink: "setting/static-pages" },
        { label: "مدیریت محتوا", routerLink: "setting/content-management" },
      ],
    },
    {
      label: "مقالات",
      icon: "pi pi-pw pi-file",
      routerLink: ["/articles"],
    },
  ];
  private _generalActions: TableAction[] = [
    {
      tooltip: "ویرایش",
      icon: "fas fa-pencil",
      color: "info",
    },
  ];

  get sideMenuItems(): MenuItem[] {
    return this._sideMenuItems;
  }

  get generalActions(): TableAction[] {
    return this._generalActions;
  }

  hasValue(value: any) {
    return value !== null && value !== undefined;
  }

  getValue<T>(observable: Observable<T>) {
    return observable.pipe(filter(this.hasValue)).toPromise();
  }

  itemIsEmpty(item: any): boolean {
    return (
      item.parameter == null ||
      item.parameter == undefined ||
      item.parameter == "" ||
      item.parameter.length == 0
    );
  }

  checkValidate(
    parameters: ItemValidationCheck[],
    viewContainerRef: ViewContainerRef
  ) {
    if (parameters.length == 1) {
      let item = parameters[0];
      if (this.itemIsEmpty(item)) {
        this.messager.show(
          "error",
          { detail: item.errorDetail, summary: item.errorSummary || "خطا" },
          viewContainerRef
        );
      }
    } else {
      let messages = [];
      for (const item of parameters)
        if (this.itemIsEmpty(item))
          messages.push({
            detail: item.errorDetail,
            summary: item.errorSummary || "خطا",
          });
      this.messager.show("error", messages, viewContainerRef);
    }
  }

  cancellationConfirm(vcRef: ViewContainerRef): Promise<any> {
    return this.confirmer.show(vcRef, "عملیات لغو شوند؟", {
      header: "لغو عملیات",
      icon: "fa fa-exclamation-triangle",
    });
  }

  deletionConfirm(vcRef: ViewContainerRef): Promise<any> {
    return this.confirmer.show(vcRef, "آیا از حذف این مورد اطمینان دارید؟", {
      header: "حذف",
      icon: "fa fa-times",
    });
  }

  successfullMessage(vcRef: ViewContainerRef): Promise<any> {
    return this.toaster.show(
      {
        severity: "success",
        summary: "عملیات با موفقیت انجام شد.",
      },
      vcRef
    );
  }

  cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  shallowCloneObj(obj) {
    return Object.assign({}, obj);
  }

  checkConnection(): Observable<boolean> {
    return merge<boolean>(
      fromEvent(window, "offline").pipe(map(() => false)),
      fromEvent(window, "online").pipe(map(() => true)),
      new Observable((observer: Observer<boolean>) => {
        observer.next(navigator.onLine);
        observer.complete();
      })
    );
  }

  //#endregion GENERAL
}
