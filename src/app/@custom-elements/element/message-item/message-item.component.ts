import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/api";
import { MessageSeverities } from '../../type/message-severities.type';


@Component({
  selector: "message-item",
  templateUrl: "./message-item.component.html",
  styleUrls: ["./message-item.component.scss"]
})
export class MessageItemComponent implements OnInit {
  constructor() {}

  messages: Message[] = [];
  severity: MessageSeverities = "info";

  ngOnInit() {}

  show(messages: Message[] | Message) {
    this.messages = [];
    if (Array.isArray(messages)) {
      for (const m of messages) {
        m.severity = this.severity;
        this.messages.push(m);
      }
    } else {
      messages.severity = this.severity;
      this.messages.push(messages);
    }
  }
}
