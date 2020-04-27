import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { PAGES } from ".";
import { ComponentModule } from "../Components/component.module";
import { routes } from "./page.route";
import { PrimeNgModule } from "../Prime-Ng/prime-ng.module";
import { DpDatePickerModule } from "ng2-jalali-date-picker";
import { DirectiveModule } from "../Directives/directive.module";
import { CustomElementsModule } from '../@custom-elements/custom-elements.module';

@NgModule({
  declarations: [...PAGES],
  exports: [...PAGES, RouterModule],
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DirectiveModule,
    CustomElementsModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PageModule {}

