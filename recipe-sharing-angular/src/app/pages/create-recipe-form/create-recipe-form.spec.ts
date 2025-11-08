import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeForm } from './create-recipe-form';

describe('CreateRecipeForm', () => {
  let component: CreateRecipeForm;
  let fixture: ComponentFixture<CreateRecipeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecipeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRecipeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
