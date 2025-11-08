import { Component } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeForm } from '../create-recipe-form/create-recipe-form';
import { AuthService } from '../../services/Auth/auth-service';
import { RecipeService } from '../../services/Recipe/recipe-service';

@Component({
  selector: 'app-home-page',
  imports: [RecipeCard, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  recipe = [];
  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
    private recipeService: RecipeService
  ) {}

  handleOpenCreateRecipeForm() {
    this.dialog.open(CreateRecipeForm);
  }
  ngOnInit() {
    this.authService.getUserProfile();
    this.recipeService.getRecipes().subscribe(

    )
    this.recipeService.recipeSubject.subscribe((state) => {
      this.recipe = state.recipes
    })
  }
}
