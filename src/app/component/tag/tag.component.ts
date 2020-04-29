import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrimeColor } from 'src/app/@prime/prime-type/prime-color';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  constructor() {}
  @Input() text: string;
  @Input() showDeleteIcon: boolean = true;
  @Input() color: PrimeColor = "lightGray";

  @Output() onDelete = new EventEmitter();

  styleClass: any;
  ngOnInit() {
    switch (this.color) {
      case "lightGray":
        this.styleClass += " ui-button-secondary";
        break;
      case "light":
        this.styleClass += `ui-button-${this.color} bg-${this.color} border-dark text-dark`;
        break;

      default:
        this.styleClass += `ui-button-${this.color} bg-${this.color} border-${this.color}`;
        break;
    }
  }

  _onDelete() {
    this.onDelete.emit();
  }

}
