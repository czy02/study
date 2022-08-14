import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaogaoComponent } from './caogao.component';

describe('CaogaoComponent', () => {
  let component: CaogaoComponent;
  let fixture: ComponentFixture<CaogaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaogaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaogaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
