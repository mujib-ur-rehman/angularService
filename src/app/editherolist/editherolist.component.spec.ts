import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditherolistComponent } from './editherolist.component';

describe('EditherolistComponent', () => {
  let component: EditherolistComponent;
  let fixture: ComponentFixture<EditherolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditherolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditherolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
