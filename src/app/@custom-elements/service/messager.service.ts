import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from "@angular/core";
import { MessageItemComponent } from "../element/message-item/message-item.component";
import { MessageSeverities } from "../type/message-severities.type";

@Injectable({
  providedIn: "root",
})
export class Messager {
  constructor(private resolver: ComponentFactoryResolver) {}
  private cmp: ComponentRef<MessageItemComponent>;

  show(
    severity: MessageSeverities,
    message:
      | { summary: string; detail: string }
      | { summary: string; detail: string }[],
    viewContainerRef: ViewContainerRef
  ) {
    let factory = this.resolver.resolveComponentFactory(MessageItemComponent);
    viewContainerRef.clear();
    this.cmp = viewContainerRef.createComponent(factory);
    document
      .querySelector((viewContainerRef as any)._data.renderElement.localName)
      .prepend(viewContainerRef.element.nativeElement.nextSibling);
    this.cmp.instance.severity = severity;
    this.cmp.instance.show(message);
  }

  clear() {
    this.cmp.instance.messages = [];
  }

  successfullMessage(vcRef: ViewContainerRef): void {
    return this.show(
      "success",
      {
        summary: "عملیات با موفقیت انجام شد.",
        detail: "success",
      },
      vcRef
    );
  }
}
