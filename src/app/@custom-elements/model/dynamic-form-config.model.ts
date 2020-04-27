import { SelectItem } from "primeng/api";
import { ErrorModel } from "./error.model";

export type DynamicFormConfig =
  | {
      type: "text";
      label?: string;
      labelWidth?: number;
      readonly?: boolean;
      placeholder?: string;
      formControlName: string;
      errors: ErrorModel[];
      value?: any;
    }
  | {
      type: "dropdown";
      label?: string;
      labelWidth?: number;
      placeholder?: string;
      readonly?: boolean;
      formControlName: string;
      errors: ErrorModel[];
      dropdownItems: SelectItem[];
      value?: any;
    }
  | {
      type: "color-picker";
      label?: string;
      labelWidth?: number;
      formControlName: string;
      errors: ErrorModel[];
      value?: any;
      inline?: boolean;
    }
  | {
      type: "hidden";
      formControlName: string;
      value?: any;
    };
