import {
  Directive,
  Input,
  OnInit,
  Renderer2,
  ElementRef,
  EventEmitter,
  Output,
} from "@angular/core";
import { BeforeAfterConfig } from "../type/before-after-config.type";

@Directive({
  selector: "[beforeAfter]",
})
export class BeforeAfterDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @Input() beforeAfter: BeforeAfterConfig;
  @Output() onBeforeBtnClick = new EventEmitter();
  @Output() onAfterBtnClick = new EventEmitter();

  ngOnInit(): void {
    if(this.beforeAfter)
    switch (this.beforeAfter.type) {
      case "button":
        const BTN = this.renderer.createElement("button");
        const BTN_ICON_SPAN = this.renderer.createElement("span");
        const BTN_TEXT_SPAN = this.renderer.createElement("span");
        const BTN_TEXT = this.renderer.createText(this.beforeAfter.label);
        const _btnColor = this.beforeAfter.color;
        const _btnIcon = this.beforeAfter.icon || null;
        const _btnLabel = this.beforeAfter.label || null;
        const _btnIconPos = this.beforeAfter.iconPos || "left";
        const _btnIconSpin = this.beforeAfter.iconSpin || false;
        const _btnIconStylePrefix = this.beforeAfter.iconStylePrefix || "fas";
        const _btnIconRotation = this.beforeAfter.iconRotation;
        const _btnInsert = this.beforeAfter.insert || "after";
        this.renderer.setAttribute(BTN, "type", "button");
        this.renderer.addClass(BTN, "ui-button");
        this.renderer.addClass(BTN, "ui-widget");
        this.renderer.addClass(BTN, "ui-state-default");
        this.renderer.addClass(BTN, "ui-corner-all");
        this.renderer.addClass(BTN_TEXT_SPAN, "ui-button-text");
        this.renderer.addClass(BTN_TEXT_SPAN, "ui-clickable");
        this.renderer.appendChild(BTN_TEXT_SPAN, BTN_TEXT || "ui-btn");
        this.renderer.appendChild(BTN, BTN_TEXT_SPAN);
        switch (_btnColor) {
          case "lightGray":
            this.renderer.addClass(BTN, "ui-button-secondary");
            break;
          default:
            this.renderer.addClass(BTN, `ui-button-${_btnColor}`);
            this.renderer.addClass(BTN, `bg-${_btnColor}`);
            this.renderer.addClass(BTN, `border-${_btnColor}`);
            break;
        }
        if (_btnIcon != null) {
          if (_btnIconSpin) this.renderer.addClass(BTN_ICON_SPAN, "fa-spin");
          this.renderer.addClass(BTN_ICON_SPAN, `${_btnIconStylePrefix}`);
          this.renderer.addClass(BTN_ICON_SPAN, `fa-${_btnIconRotation}`);
          this.renderer.addClass(BTN_ICON_SPAN, `fa-${_btnIcon}`);
          this.renderer.addClass(BTN_ICON_SPAN, "ui-clickable");
          this.renderer.setAttribute(BTN_ICON_SPAN, "aria-hidden", "true");
          this.renderer.appendChild(BTN, BTN_ICON_SPAN);
          if (_btnLabel != null) {
            // has icon & text
            this.renderer.addClass(BTN, `ui-button-text-icon-${_btnIconPos}`);
            this.renderer.addClass(
              BTN_ICON_SPAN,
              `ui-button-icon-${_btnIconPos}`
            );
          } else {
            // has icon only
            this.renderer.addClass(BTN, "ui-button-icon-only");
            this.renderer.addClass(BTN_ICON_SPAN, "ui-button-icon-left");
          }
        } else if (_btnIcon == null) {
          //has text only
          this.renderer.addClass(BTN, "ui-button-text-only");
        }
        this.addToDOM(BTN, _btnInsert);
        this.renderer.listen(BTN, "click", (evt) => {
          if (_btnInsert == "after") this.onAfterBtnClick.emit(evt);
          else this.onBeforeBtnClick.emit(evt);
        });
        break;
      case "icon":
        const ICON = this.renderer.createElement("i");
        const ICON_SPAN = this.renderer.createElement("span");
        const _icon = this.beforeAfter.icon;
        const _spin = this.beforeAfter.spin || false;
        const _stylePrefix = this.beforeAfter.stylePrefix || "fas";
        const _rotation = this.beforeAfter.rotation;
        const _iconInsert = this.beforeAfter.insert || "before";
        this.renderer.addClass(ICON, `${_stylePrefix}`);
        this.renderer.addClass(ICON, `fa-${_icon}`);
        this.renderer.addClass(ICON, `fa-${_rotation}`);
        this.renderer.setStyle(ICON, "line-height", 1.25);
        this.renderer.addClass(ICON_SPAN, "ui-inputgroup-addon");
        if (_spin) this.renderer.addClass(ICON, "fa-spin");
        this.renderer.appendChild(ICON_SPAN, ICON);
        this.addToDOM(ICON_SPAN, _iconInsert);
        break;
      case "text":
        const TEXT = this.renderer.createText(this.beforeAfter.text || null);
        const TEXT_SPAN = this.renderer.createElement("span");
        const _textInsert = this.beforeAfter.insert || "before";
        this.renderer.addClass(TEXT_SPAN, "ui-inputgroup-addon");
        this.renderer.setStyle(TEXT_SPAN, "line-height", 1.25);
        this.renderer.setStyle(TEXT_SPAN, "font-size", "14px");
        this.renderer.setStyle(TEXT_SPAN, "display", "flex");
        this.renderer.setStyle(TEXT_SPAN, "align-items", "center");
        this.renderer.setStyle(TEXT_SPAN, "justify-content", "center");
        this.renderer.appendChild(TEXT_SPAN, TEXT);
        this.addToDOM(TEXT_SPAN, _textInsert);
        break;
    }
  }

  addToDOM(el: any, pos: "before" | "after") {
    if (pos == "after")
      this.renderer.insertBefore(
        this.el.nativeElement.parentNode,
        el,
        this.el.nativeElement
      );
    else if (pos == "before")
      this.renderer.appendChild(this.el.nativeElement.parentNode, el);
  }
}
