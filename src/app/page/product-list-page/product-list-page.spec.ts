import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPage } from './product-list-page';

describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
