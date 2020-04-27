import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

import { TreeFilterMode } from '../../type/tree-filter-mode.type';
import { TreeSelectionMode } from '../../type/tree-selection-mode.type';
import { Orientation } from '../../type/orientation.type';
import { Tree } from '../../model/tree.model';
import { TreeNode } from 'primeng';

@Component({
  selector: "tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.scss"]
})
export class TreeComponent implements OnInit {
  constructor() {}

  @Input() items: Tree[];
  @Input() hasFilter: boolean = true;
  @Input() metaKeySelection: boolean = true;
  @Input() filterPlaceholder: string = "جستجو";
  @Input() filterMode: TreeFilterMode = "lenient";
  @Input() emptyMessage: string = "موردی یافت نشد";
  @Input() propagateSelectionUp: boolean = true;
  @Input() propagateSelectionDown: boolean = true;
  @Input() selectionMode: TreeSelectionMode = "single";
  @Input() selected: TreeNode | TreeNode[] = null;
  @Input() layout: Orientation = "vertical";
  @Output() onNodeSelect = new EventEmitter();
  @Output() onNodeUnselect = new EventEmitter();
  @Output() onNodeExpand = new EventEmitter();
  @Output() onNodeCollapse = new EventEmitter();
  @Output() selectedChange = new EventEmitter();

  ngOnInit() {}

  _onNodeSelect(event) {
    let result: any;
    if (this.selectionMode == "checkbox" || this.selectionMode == "multiple") {
      result = {
        selectedNode: event.node,
        selectedNodes: this.selected
      };
    } else {
      result = event.node;
    }
    this.onNodeSelect.emit(result);
    this.selectedChange.emit(this.selected);
  }

  _onNodeUnselect(event) {
    this.onNodeUnselect.emit(event.node);
    this.selectedChange.emit(this.selected);
  }

  _onNodeExpand(event) {
    this.onNodeExpand.emit(event.node);
  }

  _onNodeCollapse(event) {
    this.onNodeCollapse.emit(event.node);
  }
}
