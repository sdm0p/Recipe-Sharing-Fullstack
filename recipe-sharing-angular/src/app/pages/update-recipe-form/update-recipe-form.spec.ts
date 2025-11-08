import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecipeForm } from './update-recipe-form';

describe('UpdateRecipeForm', () => {
  let component: UpdateRecipeForm;
  let fixture: ComponentFixture<UpdateRecipeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRecipeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRecipeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
