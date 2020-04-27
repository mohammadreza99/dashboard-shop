import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "progress-spinner",
  templateUrl: "./progress-spinner.component.html",
  styleUrls: ["./progress-spinner.component.scss"]
})
export class ProgressSpinnerComponent implements OnInit {
  constructor() {}
  
  @Input() fill: string;
  @Input() animationDuration: number = 2;
  @Input() strokeWidth: number = 2;
  @Input() width: number = 100;
  @Input() height: number = 100;

  style: any;

  ngOnInit() {
    this.style = {
      width: this.width + "px",
      height: this.height + "px"
    };
  }
}
