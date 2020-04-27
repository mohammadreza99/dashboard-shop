import { Component, OnInit, Input } from "@angular/core";
import { ProgressbarMode } from '../../type/progressbar-mode.type';


@Component({
  selector: "progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"]
})
export class ProgressBarComponent implements OnInit {
  constructor() {}
  @Input() mode: ProgressbarMode = "determinate";
  @Input() height: number;
  @Input() value: number;
  @Input() showValue: boolean;

  ngOnInit() {}
}
