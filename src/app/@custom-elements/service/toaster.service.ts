import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { MessageService, Message } from "primeng/api";
import { Position } from "../type/position.type";
import { ToastItemComponent } from '../element/toast-item/toast-item.component';
@Injectable({
  providedIn: "root"
})
export class Toaster {
  constructor(
    private messageService: MessageService,
    private resolver: ComponentFactoryResolver
  ) {}

  show(
    message: Message,
    viewContainerRef: ViewContainerRef,
    position?: Position
  ) {
    if (message.life == undefined) Object.assign(message, { life: 2000 });
    viewContainerRef.clear();
    let factory = this.resolver.resolveComponentFactory(ToastItemComponent);
    let cmp = viewContainerRef.createComponent(factory);
    if (position) cmp.instance.position = position;
    setTimeout(() => {
      this.messageService.add(message);
    }, 0);
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, message.life);
    });
  }

  clear() {
    this.messageService.clear();
  }

  showMultiple(messages: Message[]) {
    this.messageService.addAll(messages);
  }
}
