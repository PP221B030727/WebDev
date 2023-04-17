import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenVacancyComponent } from './top-ten-vacancy.component';

describe('TopTenCompanyComponent', () => {
  let component: TopTenVacancyComponent;
  let fixture: ComponentFixture<TopTenVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenVacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
