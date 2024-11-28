import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardollectionComponent } from './cardollection.component';

describe('CardollectionComponent', () => {
  let component: CardollectionComponent;
  let fixture: ComponentFixture<CardollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
