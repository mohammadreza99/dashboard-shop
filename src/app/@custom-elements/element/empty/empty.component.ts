import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "empty",
  templateUrl: "./empty.component.html",
  styleUrls: ["./empty.component.scss"]
})
export class EmptyComponent implements OnInit {
  constructor() {}

  @Input() show: boolean = false;
  @Input() message: string = "موردی وجود ندارد.";

  ngOnInit() {}
}
