export class Tree {
  label?: string;
  data?: any;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  children?: Tree[];
  leaf?: boolean;
  expanded?: boolean;
  type?: string;
  parent?: Tree;
  partialSelected?: boolean;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
  selectable?: boolean;
  key?: string;
}
