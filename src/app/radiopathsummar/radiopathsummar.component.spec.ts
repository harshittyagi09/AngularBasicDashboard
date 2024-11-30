import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiopathsummarComponent } from './radiopathsummar.component';

describe('RadiopathsummarComponent', () => {
  let component: RadiopathsummarComponent;
  let fixture: ComponentFixture<RadiopathsummarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiopathsummarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiopathsummarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
