import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListPage } from './customer-list-page';

describe('CustomerListPage', () => {
  let component: CustomerListPage;
  let fixture: ComponentFixture<CustomerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
