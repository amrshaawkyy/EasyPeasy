package com.easypeazy.Domain.Interfaces;

import com.easypeazy.Domain.Models.Recipe;

import java.util.Collection;

public interface IRecipeService {
    Collection<Recipe> retrieveAllRecipes();

    Recipe retrieveRecipeById(int id);

    void createRecipe(Recipe recipe);

    void updateRecipe(Recipe recipe);

    void deleteRecipeById(int id);
}
