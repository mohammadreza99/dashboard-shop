import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { DpDatePickerModule } from "ng2-jalali-date-picker";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { COMPONENTS, ENTRY_COMPONENTS } from ".";
import { DirectiveModule } from "../Directives/directive.module";
import { CustomElementsModule } from "../@custom-elements/custom-elements.module";
@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    DirectiveModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CustomElementsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [ENTRY_COMPONENTS],
})
export class ComponentModule {}
