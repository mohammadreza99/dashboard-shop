import { Injectable, ViewContainerRef } from '@angular/core';
import * as moment from 'jalali-moment';
import { MenuItem } from 'primeng/api';
import { Category, Brand, FeatureValue } from '../model/product.model';
import { Product } from '../model/product.model';
import { Feature } from '../model/product.model';
import { ItemValidationCheck } from '../model/item-validation-check.model';
import { ExtraFieldGroup } from '../model/product.model';
import { ExtraField } from '../model/product.model';
import { Customer } from '../model/customer.model';
import { Order } from '../model/order.model';
import { CustomerGroup } from '../model/customer-group.model';
import { TagItem } from '../model/product.model';
import { State } from '../model/state.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { ResponseModel } from '../model/response.model';
import { Observable, Observer, fromEvent, merge, throwError, of } from 'rxjs';
import { map, switchMap, catchError, filter } from 'rxjs/operators';
import { PrimeMessageService } from '../@prime/prime-service/prime-message.service';
import { PrimeConfirmService } from '../@prime/prime-service/prime-confirm.service';
import { PrimeToastService } from '../@prime/prime-service/prime-toast.service';
import { PaymentMethod } from '../type/payment-method';
import { PostingMethod } from '../type/posting-method';
import { OrderStatus } from '../type/order-status';
import { PrimeTree } from '../@prime/prime-model/prime-tree.model';
import { PrimeTreeTable } from '../@prime/prime-model/prime-tree-table.model';
import { PrimeTableAction } from '../@prime/prime-model/prime-table-action.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(
    private messager: PrimeMessageService,
    private confirmer: PrimeConfirmService,
    private toaster: PrimeToastService,
    private http: HttpClient
  ) {}
  /////////////////////////////////////////////////////////////////////////////
  //                                ORDER                                    //
  /////////////////////////////////////////////////////////////////////////////
  // #region ORDER

  private _orders: Order[] = [
    {
      id: '0',
      trackingCode: 'md-1024',
      address: {
        id: '0',
        state: '??????????',
        city: '??????????',
        postalAddress: '???????????? ???????????? ?????????? ??????',
        postalCode: '1234567890',
      },
      customerId: '0',
      date: moment(),
      price: 20000,
      postingPrice: 1000,
      discount: 0,
      totalPrice: 21000,
      paymentMethod: PaymentMethod.InPlace,
      postingMethod: PostingMethod.Post,
      status: OrderStatus.Canceled,
      discription: '',
      products: [
        {
          count: 2,
          productId: '1',
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
      id: '0',
      groupId: '1',
      firstName: '????????????',
      lastName: '????????',
      birthDate: moment(),
      registerDate: moment(),
      gender: 'female',
      nationalCode: '111222',
      email: 'solmaz@gmail.com',
      address: {
        id: '0',
        state: '??????????',
        city: '??????????',
        postalAddress: '???????????? ???????????? ?????????? ??????',
        postalCode: '1234567890',
      },
      mobile: '09122222222',
      phone: '02188888888',
      password: '1234',
      subscription: true,
    },
    {
      id: '1',
      groupId: '2',
      firstName: '??????????????',
      lastName: '????????????',
      birthDate: moment(),
      registerDate: moment(),
      gender: 'male',
      nationalCode: '111222',
      email: 'solmaz@gmail.com',
      address: {
        id: '0',
        state: '??????????',
        city: '??????????',
        postalAddress: '???????????? ???????????? ?????????? ??????',
        postalCode: '1234567890',
      },
      mobile: '09122222222',
      phone: '02188888888',
      password: '1234',
      subscription: false,
    },
  ];
  private _customerGroups: CustomerGroup[] = [
    {
      id: 1,
      label: '?????? ??????',
    },
    {
      id: 2,
      label: '????????',
    },
  ];
  private _states: State[] = [
    {
      label: '?????????????????? ????????',
      parentId: null,
      id: 'b6d2fee3-7b8b-45ce-b24f-a8e75e056eb6',
    },
    {
      label: '?????????????????? ????????',
      parentId: null,
      id: '0bd5ae58-3fc2-452e-8c9f-25a6947e8665',
    },
    {
      label: '????????????',
      parentId: null,
      id: 'a9a0bd66-79e2-4518-8774-4b25f2003b98',
    },
    {
      label: '????????????',
      parentId: null,
      id: '2a794383-0154-4a04-a0f9-374a1e04895b',
    },
    {
      label: '??????????',
      parentId: null,
      id: '26d227a5-c7e5-4427-90b4-a49a7c83ce9b',
    },
    {
      label: '??????????',
      parentId: null,
      id: '68aa98d7-c4a1-47d0-a38d-53ca0d1231f6',
    },
    {
      label: '??????????',
      parentId: null,
      id: '18d797d4-377f-4d70-8bc6-2396741cc50a',
    },
    {
      label: '??????????',
      parentId: null,
      id: 'c4e9a107-0dc9-42f0-b9f2-03dbb654503c',
    },
    {
      label: '???????????????? ?? ??????????????',
      parentId: null,
      id: 'e0efa4d4-a6c5-4df1-99b0-e1ce0025c1fd',
    },
    {
      label: '???????????? ??????????',
      parentId: null,
      id: 'c000758a-af3d-425d-b3ac-0ad1ae812d00',
    },
    {
      label: '???????????? ????????',
      parentId: null,
      id: '7c6fba7d-803b-4b0f-9929-10f28e80ab7d',
    },
    {
      label: '???????????? ??????????',
      parentId: null,
      id: '81fe9562-246e-4e57-a22d-78395fc6e3fe',
    },
    {
      label: '??????????????',
      parentId: null,
      id: '14d01e50-bb1e-4bec-a994-8d91e2ad4185',
    },
    {
      label: '??????????',
      parentId: null,
      id: '1efc77f8-3787-418d-bc8c-4fb1e2fb4aa5',
    },
    {
      label: '??????????',
      parentId: null,
      id: '4cccb5b7-8220-4933-b251-0b025205b836',
    },
    {
      label: '???????????? ?? ????????????????',
      parentId: null,
      id: '2f92d803-fbbc-49e9-a0eb-ebe5bf2b99de',
    },
    {
      label: '????????',
      parentId: null,
      id: '173e87ce-761f-46fe-91c2-819a8615e53a',
    },
    {
      label: '??????????',
      parentId: null,
      id: '0d3cc539-3142-4371-a3f9-09773e02b35c',
    },
    { label: '????', parentId: null, id: '18f184ae-a010-47de-9ae0-f761e9e1f6d8' },
    {
      label: '??????????????',
      parentId: null,
      id: '9047a2f4-11db-4131-85ef-9c1f57135d53',
    },
    {
      label: '??????????',
      parentId: null,
      id: '842d53ca-1f19-465f-900c-495786e4c373',
    },
    {
      label: '????????????????',
      parentId: null,
      id: '99f9311f-4ccb-49e6-9b7c-158ec0778525',
    },
    {
      label: '???????????????? ??????????????????',
      parentId: null,
      id: 'c811b946-aa70-4462-8a67-5d7cb0cbe5d7',
    },
    {
      label: '????????????',
      parentId: null,
      id: '244fabca-8b38-43ef-a312-203b9cf2b69e',
    },
    {
      label: '??????????',
      parentId: null,
      id: 'dae50e8f-dabe-4744-adc8-20bcfe1192a8',
    },
    {
      label: '????????????',
      parentId: null,
      id: 'efa8e491-eec7-44e7-af89-4766b5196343',
    },
    {
      label: '????????????????',
      parentId: null,
      id: 'd18c9c3d-ebbf-45c1-8f84-5ad043685fe2',
    },
    {
      label: '??????????',
      parentId: null,
      id: '817b090c-0f98-4981-bfbb-d81105ea388e',
    },
    {
      label: '??????????????',
      parentId: null,
      id: 'bdaff093-01fa-449b-9611-7e7c1c9dffd0',
    },
    {
      label: '??????????',
      parentId: null,
      id: '13b507e4-1bdd-47e7-b10b-3605fb7d377e',
    },
    {
      label: '??????',
      parentId: null,
      id: '5003372a-45c2-462b-ac9c-8f088adfc2f3',
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
  ): PrimeTree[] {
    return this.convertExtraFieldGroupsToTreeArray(
      extraFieldGroups,
      extraFields
    );
  }

  getTreeTableModelExtraFieldGroups(
    extraFieldGroups: ExtraFieldGroup[],
    extraFields: ExtraField[]
  ): PrimeTreeTable[] {
    return this.convertExtraFieldGroupsToTreeTableArray(
      extraFieldGroups,
      extraFields
    );
  }

  convertExtraFieldGroupsToTreeArray(
    extraFieldGroups: ExtraFieldGroup[],
    extraFields: ExtraField[]
  ): PrimeTree[] {
    let result: PrimeTree[] = [];
    for (const item of extraFieldGroups)
      result.push({
        label: item.label,
        data: { id: item.id, parentId: undefined },
        children: this.getExtraFieldGroupChildren(extraFields, item, 'tree'),
        key: item.id.toString() + 'g',
      });
    return result;
  }

  convertExtraFieldGroupsToTreeTableArray(
    extraFieldGroups: ExtraFieldGroup[],
    extraFields: ExtraField[]
  ): PrimeTreeTable[] {
    let result: PrimeTreeTable[] = [];
    for (const item of extraFieldGroups)
      result.push({
        data: {
          label: item.label,
          id: item.id,
        },
        children: this.getExtraFieldGroupChildren(
          extraFields,
          item,
          'treeTable'
        ),
      });
    return result;
  }

  getExtraFieldGroupChildren(
    extraFields: ExtraField[],
    item: ExtraFieldGroup,
    type: 'tree' | 'treeTable'
  ): PrimeTree[] {
    let result = [];
    for (const e of extraFields) {
      this.getExtraFieldById(e.id).subscribe((child) => {
        if (item.id == child.result.groupId)
          if (type == 'tree')
            result.push({
              label: child.result.label,
              data: { id: child.result.id, groupId: child.result.groupId },
              key: child.result.id.toString() + 'e',
            });
          else if (type == 'treeTable')
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

  convertExtraFieldToTreeItem(extraField: ExtraField): PrimeTree {
    let result: PrimeTree = {
      label: extraField.label,
      data: { id: extraField.id, groupId: extraField.group.id },
      key: extraField.id.toString() + 'e',
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

  getTreeModelCategoriesWithRootNode(categories: Category[]): PrimeTree[] {
    let treeCategories = this.getTreeModelCategories(categories);
    let rootNode: PrimeTree = {
      label: '???????? ????????',
      data: { id: null, parentId: null },
      children: treeCategories,
      expanded: true,
      key: 'root',
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

  getTreeModelCategories(categories: Category[]): PrimeTree[] {
    return this.convertCategoriesToTreeArray(
      this.getGroupedCategories(categories)
    );
  }

  getTreeTableModelCategories(categories: Category[]): PrimeTreeTable[] {
    return this.convertCategoriesToTreeTableArray(
      this.getGroupedCategories(categories)
    );
  }

  /**
   * @param list : ???? ?????????? ???? ?????? ????????
   * @param id : ?????????? ?????? ???? ?????? ?????? ???????? ????????. ???????? ???? ?????????? ?????? ?????? ?????? ???????? ?????? ???? ???????? ????????
   * @return : ?????? ?????? ???? ?????? ???? ???????? ???? ???????? ???????? ???????? ?????????? ?? ????????????????????
   */
  getTreeNodeById(list: PrimeTree[], id: number): PrimeTree {
    for (const c of list)
      if (c.data.id == id) return c;
      else if (c.children)
        if (this.getTreeNodeById(c.children, id))
          return this.getTreeNodeById(c.children, id);
  }

  convertCategoryToTreeItem(groupedCategories: Category[], category: Category) {
    let result: PrimeTree = {
      label: category.label,
      data: {
        id: category.id,
        parentId: category.parentId,
        children: category.children,
      },
      children: this.getCategoryChildrenByType(
        groupedCategories,
        category,
        'tree'
      ),
      key: category.id.toString() + 'c',
    };
    return result;
  }

  convertCategoriesToTreeArray(groupedCategories: Category[]): PrimeTree[] {
    let result: PrimeTree[] = [];
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
            'tree'
          ),
          key: item.id.toString() + 'c',
        });
    }
    return result;
  }

  convertCategoriesToTreeTableArray(
    groupedCategories: Category[]
  ): PrimeTreeTable[] {
    let result: PrimeTreeTable[] = [];
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
            'treeTable'
          ),
        });
    return result;
  }

  /**
   * @params categories : ?????????? ???? ???? ???????????? ???? ???? ???????????????? ???????? . ???????? ???????????????? ?????????????? ???????? ???????? ???? ????????
   * @return : ???????? ?????????? ???? ???????????? ?????????? ???????????? ???? ?????????? ???????????????? ?????? ???????????????????? . ???????? ?????? ???? ???? ???? ?????? ???????? ?????????? ???????? ?????????? ?? ???????????? ?????? ???????????????? ?????????????? ?????????????? ?? ????????????????????
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
   * @params categories : ?????????? ???? ???? ???????????? ???? ???? ???????????????? ???????? . ???????? ???????????????? ?????????????? ???????? ???????? ???? ????????.
   * @params category : ???????????? ???? ?????? ???????? ???????? ?????????? ???????? ???????? ?? ???????????? ?????? ?????? ???????? ?????? ???????????????? ?????????????? ???????? ??????????
   * @return : ?????????? ???????????? ???? ???? ???????????? ?????????? ???????????? ???? ???? ?????? ???????? ?????????? ???????? ?????????? ?? ?????? ?????????? ???? ???????? ???????? ???????????? ?? ???????????? ?????? ???????????????? ?????????????? ???????????? ?? ???????????? ???? ????????????????????
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
   * ???? ???????????? ???????????? ?? ???????? ?????? ?????? ???????? ???????????? ???? ?????????? ???? ?????????????? ????????????????????.
   */
  getCategoryChildrenByType(
    groupedCategories: Category[],
    category: Category,
    type: 'tree' | 'treeTable' | 'category' = 'category'
  ): PrimeTree[] | PrimeTreeTable[] | Category[] {
    let result = [];
    if (category.children && category.children.length != 0)
      for (const c of category.children) {
        let child: Category;
        child = this.getCategoryWithChildren(groupedCategories, c);
        if (type == 'tree') {
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
              'tree'
            ),
          });
        } else if (type == 'treeTable') {
          result.push({
            data: {
              label: child.label,
              id: child.id,
              parentId: child.parentId,
            },
            children: this.getCategoryChildrenByType(
              groupedCategories,
              child,
              'treeTable'
            ),
          });
        } else if (type == 'category') {
          result.push(
            child,
            ...this.getCategoryChildrenByType(
              groupedCategories,
              child,
              'category'
            )
          );
        }
      }
    return result;
  }

  setParentCategoriesUnselectable(categories: PrimeTree[]): PrimeTree[] {
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
      label: '??????????????',
      icon: 'pi pi-pw pi-file',
      routerLink: ['/home'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: '??????????????',
      icon: 'pi pi-pw pi-file',
      items: [
        {
          label: '???????? ??????????????',
          routerLink: ['/product/list'],
        },
        {
          label: '???????? ????????',
          routerLink: ['/product/category'],
        },
        {
          label: '??????????????',
          routerLink: ['/product/feature'],
        },
        {
          label: '???????????? ??????????',
          routerLink: ['/product/extra-field-group'],
        },
        // {
        //   label: '?????? ?? ??????????',
        //   routerLink: ['/product/review'],
        // },
        // {
        //   label: '?????????????? ??????????',
        //   routerLink: ['/product/related'],
        // },
        {
          label: '???????? ????',
          routerLink: ['/product/brand'],
        },
        {
          label: '???? ????',
          routerLink: ['/product/tag'],
        },
        // {
        //   label: '???? ???? ????????????',
        //   routerLink: ['/product/in-queue'],
        // },
      ],
    },
    {
      label: '?????????? ????',
      icon: 'pi pi-pw pi-file',
      items: [
        { label: '???????? ?????????? ????', routerLink: ['/customer/group/list'] },
        { label: '??????????????', routerLink: ['/customer/order/list'] },
      ],
    },
    // {
    //   label: '??????????????',
    //   icon: 'pi pi-pw pi-file',
    //   items: [
    //     { label: '???????????? ??????????????', routerLink: 'newsletters/management' },
    //     { label: '?????????????? ??????????????', routerLink: 'newsletters/subscribers' },
    //   ],
    // },
    // {
    //   label: '????????????',
    //   icon: 'pi pi-pw pi-file',
    //   items: [
    //     { label: '???????? ??????????????', routerLink: 'management/list' },
    //     { label: '?????? ????', routerLink: 'management/roles' },
    //     { label: '?????? ????????????', routerLink: 'management/access-level' },
    //   ],
    // },
    // {
    //   label: '??????????????',
    //   icon: 'pi pi-pw pi-file',
    //   items: [
    //     { label: '?????????????? ??????????', routerLink: 'reports/available-products' },
    //     {
    //       label: '?????????????? ??????????????',
    //       routerLink: 'reports/unavailable-products',
    //     },
    //     {
    //       label: '?????????????? ?????????????? ????????',
    //       routerLink: 'reports/not-purchased-products',
    //     },
    //     { label: '?????????? ??????????????', routerLink: 'reports/store-income' },
    //     { label: '???????????? ????????????', routerLink: 'reports/managers-performance' },
    //   ],
    // },
    // {
    //   label: '??????????????',
    //   icon: 'pi pi-pw pi-file',
    //   items: [
    //     { label: '?????????????? ??????????', routerLink: 'setting/general' },
    //     { label: '?????????? ????????', routerLink: 'setting/send-message' },
    //     { label: '?????????? ????????', routerLink: 'setting/static-pages' },
    //     { label: '???????????? ??????????', routerLink: 'setting/content-management' },
    //   ],
    // },
    // {
    //   label: '????????????',
    //   icon: 'pi pi-pw pi-file',
    //   routerLink: ['/articles'],
    // },
  ];
  private _generalActions: PrimeTableAction[] = [
    {
      tooltip: '????????????',
      icon: 'fas fa-pencil',
      color: 'info',
    },
  ];

  get sideMenuItems(): MenuItem[] {
    return this._sideMenuItems;
  }

  get generalActions(): PrimeTableAction[] {
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
      item.parameter == '' ||
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
          {
            severity: 'error',
            detail: item.errorDetail,
            summary: item.errorSummary || '??????',
          },
          viewContainerRef
        );
      }
    } else {
      let messages = [];
      for (const item of parameters)
        if (this.itemIsEmpty(item))
          messages.push({
            detail: item.errorDetail,
            summary: item.errorSummary || '??????',
            severity: 'error',
          });
      this.messager.show(messages, viewContainerRef);
    }
  }

  cancellationConfirm(vcRef: ViewContainerRef): Promise<any> {
    return this.confirmer.show(
      {
        message: '???????????? ?????? ??????????',
        header: '?????? ????????????',
        icon: 'fa fa-exclamation-triangle',
      },
      vcRef
    );
  }

  deletionConfirm(vcRef: ViewContainerRef): Promise<any> {
    return this.confirmer.show(
      {
        message: '?????? ???? ?????? ?????? ???????? ?????????????? ????????????',
        header: '??????',
        icon: 'fa fa-times',
      },
      vcRef
    );
  }

  successfullMessage(vcRef: ViewContainerRef): Promise<any> {
    return this.toaster.show(
      {
        severity: 'success',
        summary: '???????????? ???? ???????????? ?????????? ????.',
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
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((observer: Observer<boolean>) => {
        observer.next(navigator.onLine);
        observer.complete();
      })
    );
  }

  //#endregion GENERAL
}
