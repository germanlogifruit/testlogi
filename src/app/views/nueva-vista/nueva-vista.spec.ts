import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaVista } from './nueva-vista';

describe('NuevaVista', () => {
  let component: NuevaVista;
  let fixture: ComponentFixture<NuevaVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaVista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
