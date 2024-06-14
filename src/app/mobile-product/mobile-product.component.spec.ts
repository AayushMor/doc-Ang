import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProductComponent } from './mobile-product.component';

describe('MobileProductComponent', () => {
  let component: MobileProductComponent;
  let fixture: ComponentFixture<MobileProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
