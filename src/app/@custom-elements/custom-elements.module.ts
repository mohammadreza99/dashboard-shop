import { NgModule, ModuleWithProviders } from "@angular/core";
import { MessageService, ConfirmationService } from "primeng/api";
import { DialogService } from "primeng";
import { PrimeNgModule } from "./prime-ng/prime-ng.module";
import { ElementModule } from "./element/element.module";
import { Messager } from "./service/messager.service";
import { Confirmer } from "./service/confirmer.service";

@NgModule({
  imports: [ElementModule, PrimeNgModule],
  exports: [ElementModule, PrimeNgModule],
  providers: [
    MessageService,
    DialogService,
    ConfirmationService,
    Messager,
    Confirmer,
  ],
})
export class CustomElementsModule {
  static forRoot(): ModuleWithProviders<CustomElementsModule> {
    return {
      ngModule: CustomElementsModule,
      providers: [
        MessageService,
        DialogService,
        ConfirmationService,
        Messager,
        Confirmer,
      ],
    };
  }
}
