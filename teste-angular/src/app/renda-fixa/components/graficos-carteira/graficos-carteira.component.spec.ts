import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosCarteiraComponent } from './graficos-carteira.component';

describe('GraficosCarteiraComponent', () => {
  let component: GraficosCarteiraComponent;
  let fixture: ComponentFixture<GraficosCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficosCarteiraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficosCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
