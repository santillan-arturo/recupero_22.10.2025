import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cassettiera } from './cassettiera';

describe('Cassettiera', () => {
  let component: Cassettiera;
  let fixture: ComponentFixture<Cassettiera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cassettiera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cassettiera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
