import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCopyComponent } from './contact-copy.component';

describe('ContactCopyComponent', () => {
  let component: ContactCopyComponent;
  let fixture: ComponentFixture<ContactCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
