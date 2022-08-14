import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillinComponent } from './willin.component';

describe('WillinComponent', () => {
  let component: WillinComponent;
  let fixture: ComponentFixture<WillinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WillinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
