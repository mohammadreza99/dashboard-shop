import {
  Injectable,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { ConfirmationService } from "primeng/api";

import { ConfirmItemComponent } from '../element/confirm-item/confirm-item.component';
import { ConfirmOptions } from '../model/confirm-options.model';

@Injectable({
  providedIn: "root"
})
export class Confirmer {
  constructor(
    private confirmationService: ConfirmationService,
    private resolver: ComponentFactoryResolver
  ) {}

  show(
    viewContainerRef: ViewContainerRef,
    message: string,
    options?: ConfirmOptions
  ) {
    let factory = this.resolver.resolveComponentFactory(ConfirmItemComponent);
    let cmp = viewContainerRef.createComponent(factory);
    Object.assign(cmp.instance.options, options);
    return new Promise((accept, reject) => {
      this.confirmationService.confirm({
        message: message,
        accept: () => {
          accept();
        },
        reject: () => {
          reject();
        }
      });
    });
  }

  cancellationConfirm(vcRef: ViewContainerRef): Promise<any> {
    return this.show(vcRef, "عملیات لغو شوند؟", {
      header: "لغو عملیات",
      icon: "fa fa-exclamation-triangle"
    });
  }

  deletionConfirm(vcRef: ViewContainerRef): Promise<any> {
    return this.show(vcRef, "آیا از حذف این مورد اطمینان دارید؟", {
      header: "حذف",
      icon: "fa fa-times"
    });
  }
}
