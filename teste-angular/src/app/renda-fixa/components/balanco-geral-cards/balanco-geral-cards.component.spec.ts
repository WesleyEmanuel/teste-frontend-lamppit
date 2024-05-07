import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancoGeralCardsComponent } from './balanco-geral-cards.component';

describe('BalancoGeralCardsComponent', () => {
  let component: BalancoGeralCardsComponent;
  let fixture: ComponentFixture<BalancoGeralCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalancoGeralCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalancoGeralCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
