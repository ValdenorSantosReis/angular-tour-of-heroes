import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockHeroesComponent } from './mock-heroes.component';

describe('MockHeroesComponent', () => {
  let component: MockHeroesComponent;
  let fixture: ComponentFixture<MockHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockHeroesComponent]
    });
    fixture = TestBed.createComponent(MockHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
