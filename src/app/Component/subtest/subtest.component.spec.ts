import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtestComponent } from './subtest.component';

describe('SubtestComponent', () => {
  let component: SubtestComponent;
  let fixture: ComponentFixture<SubtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
