import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDCensusComponent } from './ipdcensus.component';

describe('IPDCensusComponent', () => {
  let component: IPDCensusComponent;
  let fixture: ComponentFixture<IPDCensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPDCensusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
