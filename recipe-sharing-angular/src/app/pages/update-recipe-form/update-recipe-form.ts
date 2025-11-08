import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAnchor } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RecipeService } from '../../services/Recipe/recipe-service';

@Component({
  selector: 'app-update-recipe-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatAnchor, MatRadioModule, MatIcon],
  templateUrl: './update-recipe-form.html',
  styleUrl: './update-recipe-form.scss',
})
export class UpdateRecipeForm {
  constructor(
    public dialogRef: MatDialogRef<UpdateRecipeForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public recipeService: RecipeService,
    @Inject(MAT_DIALOG_DATA) public recipe: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  recipeItem: any = {
    title: '',
    description: '',
    foodType: '',
    image: '',
  };
  onSubmit() {
    this.recipeService.updateRecipes(this.recipeItem).subscribe()
    console.log('values', this.recipeItem);
  }
  ngOnInit() {
    this.recipeItem=this.recipe;
  }
}
