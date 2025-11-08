import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UpdateRecipeForm } from './../../pages/update-recipe-form/update-recipe-form';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl= 'http://localhost:5454'
  constructor(private http: HttpClient) {

  }
  recipeSubject=new BehaviorSubject<any>({
      recipes:[],
      loading:false,
      newRecipe:null
    })

    private getHeader():HttpHeaders{
      const token=localStorage.getItem('jwt')
      return new HttpHeaders({
        Authorization:`Bearer ${localStorage.getItem('jwt')}`
      })
    }
    getRecipes():Observable<any>{
      const headers=this.getHeader();
      return this.http.get(`${this.baseUrl}/api/recipes`,{headers}).pipe(
        tap((recipes)=>{
            const currentState=this.recipeSubject.value;
            this.recipeSubject.next({
              ...currentState,
              recipes
            });
        })
      )
    }
     createdRecipes(recipe:any):Observable<any>{
      const headers=this.getHeader();
      return this.http.post(`${this.baseUrl}/api/recipes`,recipe,{headers}).pipe(
        tap((newRecipe)=>{
            const currentState=this.recipeSubject.value;
            this.recipeSubject.next({
              ...currentState,
              recipes:[newRecipe,...currentState.recipes]
            });
        })
      )
    }
      updateRecipes(recipe:any):Observable<any>{
      const headers=this.getHeader();
      return this.http.post(`${this.baseUrl}/app/recipes,${recipe.id}`,recipe,{headers}).pipe(
        tap((UpdatedRecipe:any)=>{
            const currentState=this.recipeSubject.value;
            const updatedRecipes=currentState.recipes.map((item:any)=>
              item.id===UpdatedRecipe.id ? UpdatedRecipe : item
            );
            this.recipeSubject.next({
              ...currentState,
              recipes: updatedRecipes
            });
        })
      )
    }
      likeRecipes(id:any):Observable<any>{
      const headers=this.getHeader();
      return this.http.post(`${this.baseUrl}/api/recipes,${id}/like`,{headers}).pipe(
        tap((UpdatedRecipe:any)=>{
            const currentState=this.recipeSubject.value;
            const updatedRecipes=currentState.recipes.map((item:any)=>
              item.id===UpdatedRecipe.id ? UpdatedRecipe : item
            );
            this.recipeSubject.next({
              ...currentState,
              recipes: updatedRecipes
            });
        })
      )
    }
      deleteRecipes(id:any):Observable<any>{
      const headers=this.getHeader();
      return this.http.delete(`${this.baseUrl}/api/recipes/${id}`,{headers}).pipe(
        tap((deletedRecipe:any)=>{
            const currentState=this.recipeSubject.value;
            const updatedRecipes=currentState.recipes.filter((
              item:any)=>
              item.id!==id
            );
            this.recipeSubject.next({
              ...currentState,
              recipes: updatedRecipes
            });
        })
      )
    }
  }
