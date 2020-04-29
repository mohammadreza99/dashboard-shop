import { PrimeError } from './prime-error.model';
import { PrimeDropdownItem } from './prime-dropdown.model';
import { PrimeDirection } from '../prime-type/prime-direction';

export class PrimeDynamicDialogConfig {
  header?: string;
  footer?: string;
  width?: string;
  height?: string;
  closeOnEscape?: boolean;
  dismissableMask?: boolean;
  closable?: boolean;
  showHeader?: boolean;
  layout?: PrimeDirection;
}

export type PrimeDynamicFormConfig =
  | {
      type: 'text';
      label?: string;
      labelWidth?: number;
      readonly?: boolean;
      placeholder?: string;
      formControlName: string;
      errors: PrimeError[];
      value?: any;
    }
  | {
      type: 'dropdown';
      label?: string;
      labelWidth?: number;
      placeholder?: string;
      readonly?: boolean;
      formControlName: string;
      errors: PrimeError[];
      dropdownItems: PrimeDropdownItem[];
      value?: any;
    }
  | {
      type: 'color-picker';
      label?: string;
      labelWidth?: number;
      formControlName: string;
      errors: PrimeError[];
      value?: any;
    }
  | {
      type: 'hidden';
      formControlName: string;
      value?: any;
    };
