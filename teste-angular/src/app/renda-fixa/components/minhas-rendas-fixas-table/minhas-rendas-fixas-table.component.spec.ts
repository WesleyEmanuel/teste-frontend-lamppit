import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasRendasFixasTableComponent } from './minhas-rendas-fixas-table.component';

describe('MinhasRendasFixasTableComponent', () => {
  let component: MinhasRendasFixasTableComponent;
  let fixture: ComponentFixture<MinhasRendasFixasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinhasRendasFixasTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinhasRendasFixasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
