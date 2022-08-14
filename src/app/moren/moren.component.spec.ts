import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorenComponent } from './moren.component';

describe('MorenComponent', () => {
  let component: MorenComponent;
  let fixture: ComponentFixture<MorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
