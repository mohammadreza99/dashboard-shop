import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cd: ChangeDetectorRef) {}

  showSidebar: boolean = true;
  isModalSidebar: boolean = false;
  breadcrumbItems: MenuItem[] = [
    { label: 'افزودن محصول', routerLink: '/product/add' },
    { label: 'خانه', routerLink: 'home' },
  ];

  @ViewChild('mainContent', { static: true }) mainContent: ElementRef;
  @ViewChild('sidebar', { static: true, read: ElementRef }) sidebar: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.isModalSidebar = true;
      this.mainContent.nativeElement.classList.remove('mr-278');
      this.sidebar.nativeElement.classList.add('responsive-mode');
    } else {
      this.isModalSidebar = false;
      if (this.showSidebar)
        this.mainContent.nativeElement.classList.add('mr-278');
      this.sidebar.nativeElement.classList.remove('responsive-mode');
    }
    this.cd.detectChanges();
  }

  ngOnInit(): void {}

  onHambergurClick() {
    this.showSidebar = !this.showSidebar;
    if (!this.isModalSidebar)
      this.mainContent.nativeElement.classList.toggle('mr-278');
  }
}
