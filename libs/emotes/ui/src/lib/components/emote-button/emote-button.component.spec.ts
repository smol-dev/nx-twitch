import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoteButtonComponent } from './emote-button.component';

describe('EmoteButtonComponent', () => {
  let component: EmoteButtonComponent;
  let fixture: ComponentFixture<EmoteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmoteButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
