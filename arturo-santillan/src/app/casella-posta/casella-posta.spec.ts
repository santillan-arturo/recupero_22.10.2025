import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasellaPosta } from './casella-posta';

describe('CasellaPosta', () => {
  let component: CasellaPosta;
  let fixture: ComponentFixture<CasellaPosta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasellaPosta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasellaPosta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
