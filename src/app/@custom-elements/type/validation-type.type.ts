export type ValidationType =
  | "min"
  | "max"
  | "required"
  | "requiredTrue"
  | "email"
  | "minlength"
  | "maxlength"
  | "pattern"
  | "nullValidator";

export interface ValidationValue {
  value: number | string | boolean;
  errorMessage: string;
}

export type Validations = {
  [validationType in ValidationType]?: ValidationValue;
};
