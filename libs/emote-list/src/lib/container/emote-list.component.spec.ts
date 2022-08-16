import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoteListContainerComponent } from './emote-list.component';

describe('EmoteListComponent', () => {
  let component: EmoteListContainerComponent;
  let fixture: ComponentFixture<EmoteListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmoteListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmoteListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
