
import { IconStylePrefix, IconRotation } from "./icon.type";
import { Color } from './color.type';

export type BeforeAfterConfig =
  | {
      type: "button";
      label?: string;
      color?: Color;
      icon?: string;
      iconPos?: Position;
      iconStylePrefix?: IconStylePrefix;
      iconSpin?: boolean;
      iconRotation?: IconRotation;
      insert?: "before" | "after";
    }
  | {
      type: "icon";
      icon?: string;
      stylePrefix?: IconStylePrefix;
      rotation?: IconRotation;
      spin?: boolean;
      insert?: "before" | "after";
    }
  | {
      type: "text";
      text?: string;
      insert?: "before" | "after";
    };
