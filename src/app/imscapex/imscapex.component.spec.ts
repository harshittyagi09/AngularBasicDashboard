import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImscapexComponent } from './imscapex.component';

describe('ImscapexComponent', () => {
  let component: ImscapexComponent;
  let fixture: ComponentFixture<ImscapexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImscapexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImscapexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
