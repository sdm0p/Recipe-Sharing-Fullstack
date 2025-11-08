package com.sdm.controller;

import com.sdm.model.Recipe;
import com.sdm.model.User;
import com.sdm.service.RecipeService;
import com.sdm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    @Autowired
    private RecipeService recipeService;
    @Autowired
    private UserService userService;

    @PostMapping()
    public Recipe createdRecipe(@RequestBody Recipe recipe,@RequestHeader("Authorization") String jwt) throws Exception {
        User user=userService.findUserByJwt(jwt);
        Recipe createdRecipe=recipeService.createRecipe(recipe,user);
        return createdRecipe;
    }


    @GetMapping()
    public List<Recipe> getAllRecipe(){
        return recipeService.findAllRecipe();
    }

    @DeleteMapping("/{recipeId}")
    public String deleteRecipe(@PathVariable Long recipeId) throws Exception {
         recipeService.deleteRecipe(recipeId);
        return "Deleted Successfully";
    }


    @PutMapping("/{Id}")
    public Recipe updateRecipeById(@RequestBody Recipe recipe, @PathVariable Long Id) throws Exception {

        Recipe updatedRecipe=recipeService.updateRecipeById(recipe,Id);
        return updatedRecipe;
    }

    @PutMapping("/{Id}/like")
    public Recipe likeRecipe(@RequestHeader("Authorization") String jwt, @PathVariable Long Id) throws Exception {
        User user=userService.findUserByJwt(jwt);
        Recipe updatedRecipe=recipeService.likeRecipe(Id,user);
        return updatedRecipe;
    }
}
