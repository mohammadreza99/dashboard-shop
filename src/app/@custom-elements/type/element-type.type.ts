import { Type } from "@angular/core";

export type ElementType =
  | "button"
  | "splitButton"
  | "table"
  | "autocomplete"
  | "checkboxList"
  | "checkboxSingle"
  | "colorPicker"
  | "datePicker"
  | "dropdown"
  | "file"
  | "mask"
  | "multiSelect"
  | "number"
  | "password"
  | "radioButton"
  | "slider"
  | "switch"
  | "submit"
  | "tags"
  | "text"
  | "textarea"
  | "tree"
  | "icon"
  | "treeTale"
  | "container";

export type Elements = {
  [type in ElementType]?: Type<any>;
};
