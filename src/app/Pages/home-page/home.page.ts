import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { filter, first } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Toaster } from "src/app/@custom-elements/service/toaster.service";
import { Messager } from "src/app/@custom-elements/service/messager.service";
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private http: HttpClient,
    private toast: Toaster,
    private vcRef: ViewContainerRef,
    private dataService: DataService
  ) {}

  form = new FormGroup({
    control: new FormControl(null, [Validators.required]),
  });


  observable = of("response");
  hasValue(value: any) {
    return value !== null && value !== undefined;
  }
  getValue<T>(observable: Observable<T>) {
    return observable.pipe(filter(this.hasValue), first()).toPromise();
  }
  async ngOnInit() {
    var result = await this.dataService.getValue(this.observable);
    result += " suffix";
    // console.log(result);

    //////////////////////

    // if (params["id"]) {
    //   // dooo
    // } else {
    //   this.editMode = false; // so we want to add new object with currently selected parent.
    //   // these 2 subscribtions run asynchronously. so before the "this.extraField.parent" is filled,
    //   // "addExtraField" will be run and send "extraField.parent" property as NULL.
    //   // what is solution???
    //   // using nested subscribtions?
    //   this.dataService.getExtraFieldParentById(+params["groupId"]).subscribe(parent =>{
    //     this.extraField.parent = parent;
    //   });
    //   this.dataService.addExtraField(this.extrafield).subscribe();
    // }
  }
}
