import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartinComponent } from './partin.component';

describe('PartinComponent', () => {
  let component: PartinComponent;
  let fixture: ComponentFixture<PartinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
