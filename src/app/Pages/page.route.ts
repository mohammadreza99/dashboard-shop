import { Routes } from "@angular/router";
import { HomePage } from "./home-page/home.page";
import { ProductListPage } from "./product-list-page/product-list.page";
import { ProductCategoryListPage } from "./product-category-list-page/product-category-list.page";
import { ProductReviewPage } from "./product-review-page/product-review.page";
import { ProductRelatedPage } from "./product-related-page/product-related.page";
import { ProductTagListPage } from "./product-tag-list-page/product-tag-list.page";
import { ProductInQueuePage } from "./product-in-queue-page/product-in-queue.page";
import { ProductAddOrEditPage } from "./product-add-or-edit-page/product-add-or-edit.page";
import { ProductCategoryAddOrEditPage } from "./product-category-add-or-edit-page/product-category-add-or-edit.page";
import { ProductExtraFieldListPage } from "./product-extra-field-list-page/product-extra-field-list.page";
import { ProductExtraFieldAddOrEditPage } from "./product-extra-field-add-or-edit-page/product-extra-field-add-or-edit.page";
import { ProductExtraFieldGroupListPage } from "./product-extra-field-group-list-page/product-extra-field-group-list.page";
import { CustomerAddOrEditPage } from "./customer-add-or-edit-page/customer-add-or-edit.page";
import { CustomerGroupListPage } from "./customer-group-list-page/customer-group-list.page";
import { CustomerListPage } from "./customer-list-page/customer-list.page";
import { CustomerSendSmsPage } from "./customer-send-sms-page/customer-send-sms.page";
import { CustomerSendEmailPage } from "./customer-send-email-page/customer-send-email.page";
import { CustomerOrderListPage } from "./customer-order-list-page/customer-order-list.page";
import { CustomerOrderEditPage } from "./customer-order-edit-page/customer-order-edit.page";
import { ProductBrandListPage } from './product-brand-list-page/product-brand-list.page';
import { ProductFeatureListPage } from './product-feature-list-page/product-feature-list.page';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomePage
  },
  {
    path: "product",
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      },
      {
        path: "list",
        component: ProductListPage
      },
      {
        path: "add",
        component: ProductAddOrEditPage
      },
      {
        path: "edit/:id",
        component: ProductAddOrEditPage
      },
      {
        path: "extra-field-group",
        children: [
          {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
          },
          {
            path: "list",
            component: ProductExtraFieldGroupListPage
          }
        ]
      },
      {
        path: "extra-field",
        children: [
          {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
          },
          {
            path: "list",
            component: ProductExtraFieldListPage
          },
          {
            path: "add",
            component: ProductExtraFieldAddOrEditPage
          },
          {
            path: "edit/:id",
            component: ProductExtraFieldAddOrEditPage
          }
        ]
      },
      {
        path: "feature",
        children: [
          {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
          },
          {
            path: "list",
            component: ProductFeatureListPage
          }
        ]
      },
      {
        path: "category",
        children: [
          {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
          },
          {
            path: "list",
            component: ProductCategoryListPage
          },
          {
            path: "add",
            component: ProductCategoryAddOrEditPage
          },
          {
            path: "edit/:id",
            component: ProductCategoryAddOrEditPage
          }
        ]
      },
      {
        path: "tag",
        children: [
          {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
          },
          {
            path: "list",
            component: ProductTagListPage
          }
        ]
      },
      {
        path: "brand",
        children: [
          {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
          },
          {
            path: "list",
            component: ProductBrandListPage
          }
        ]
      },
      {
        path: "review",
        component: ProductReviewPage
      },
      {
        path: "related",
        component: ProductRelatedPage
      },
      {
        path: "in-queue",
        component: ProductInQueuePage
      }
    ]
  },
  {
    path: "customer",
    children: [
      {
        path: "",
        redirectTo: "group",
        pathMatch: "full"
      },
      {
        path: "list/:id",
        component: CustomerListPage
      },
      {
        path: "add",
        component: CustomerAddOrEditPage
      },
      {
        path: "edit/:id",
        component: CustomerAddOrEditPage
      },
      {
        path: "order",
        children: [
          {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
          },
          {
            path: "list",
            component: CustomerOrderListPage
          },
          {
            path: "list/:id",
            component: CustomerOrderListPage
          },
          {
            path: "edit/:id",
            component: CustomerOrderEditPage
          }
        ]
      },
      {
        path: "send-sms/:id",
        component: CustomerSendSmsPage
      },
      {
        path: "send-email/:id",
        component: CustomerSendEmailPage
      },
      {
        path: "group",
        children: [
          {
            path: "",
            redirectTo: "list",
            pathMatch: "full"
          },
          {
            path: "list",
            component: CustomerGroupListPage
          }
        ]
      }
    ]
  }
  //   {
  //     path: "customers",
  //     children: [
  //       {
  //         path: "addresses"
  //       },
  //       {
  //         path: "orders"
  //       }
  //     ]
  //   },
  //   {
  //     path: "newsletters",
  //     children: [
  //       {
  //         path: "management"
  //       },
  //       {
  //         path: "subscribers"
  //       }
  //     ]
  //   }
  //   {
  //     path: "management",
  //     children: [
  //       {
  //         path: "list"
  //       },
  //       {
  //         path: "roles"
  //       },
  //       {
  //         path: "access-level"
  //       }
  //     ]
  //   },
  //   {
  //     path: "reports",
  //     children: [
  //       {
  //         path: "available-products"
  //       },
  //       {
  //         path: "unavailable-products"
  //       },
  //       {
  //         path: "not-purchased-products"
  //       },
  //       {
  //         path: "managers-performance"
  //       },
  //       {
  //         path: "store-income"
  //       }
  //     ]
  //   },
  //   {
  //     path: "setting",
  //     children: [
  //       {
  //         path: "setting/general"
  //       },
  //       {
  //         path: "setting/send-message"
  //       },
  //       {
  //         path: "setting/content-management"
  //       },
  //       {
  //         path: "setting/static-pages"
  //       }
  //     ]
  //   },
  //   {
  //     path: "articles"
  //   }
];
