export class DropdownItem {
  label: string;
  value: string;
  image?: string;
}

export class DropdownGroupItem {
  groupLabel: string;
  groupImage?: string;
  items: DropdownItem[];
}
