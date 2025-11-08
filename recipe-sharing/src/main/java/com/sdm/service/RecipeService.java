package com.sdm.service;

import com.sdm.model.Recipe;
import com.sdm.model.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface RecipeService {
    public Recipe createRecipe(Recipe recipe, User user);
    public Recipe findRecipeById(Long id)throws Exception;
    public void deleteRecipe(Long id)throws Exception;
    public Recipe updateRecipeById(Recipe recipe,Long id)throws Exception;
    public List<Recipe> findAllRecipe();
    public Recipe likeRecipe(Long recipeId,User user)throws Exception;
}

