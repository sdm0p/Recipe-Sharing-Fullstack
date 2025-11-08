import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIcon } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecipeService } from '../../services/Recipe/recipe-service';

@Component({
  selector: 'app-create-recipe-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatAnchor, MatRadioModule, MatIcon],
  templateUrl: './create-recipe-form.html',
  styleUrl: './create-recipe-form.scss',
})
export class CreateRecipeForm {
  constructor(
    private recipeService: RecipeService,
    public dialogRef: MatDialogRef<CreateRecipeForm>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
    console.log('values', this.recipeItem);
    this.recipeService.createdRecipes(this.recipeItem).subscribe({
      next: (data) => console.log("created recipe", data),
      error: (error) => console.log("error", error),
    });
  }
}
