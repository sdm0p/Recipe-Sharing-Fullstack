import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { UpdateRecipeForm } from '../update-recipe-form/update-recipe-form';
import { RecipeService } from '../../services/Recipe/recipe-service';

@Component({
  selector: 'app-recipe-card',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  @Input() recipe: any;
  @Input() toggle: any;
  constructor(public dialog: MatDialog,public recipeService:RecipeService) {}

  handleOpenEditRecipeForm() {
    this.dialog.open(UpdateRecipeForm,{data: this.recipe});

  }
  ngOnInit() {
    console.log("toggle",this.toggle);

  }
  handleDeleteRecipe() {
    this.recipeService.deleteRecipes(this.recipe.id).subscribe(
      )
    };
  }

