package com.easypeazy.Domain.Service;

import com.easypeazy.Domain.Interfaces.IRecipeService;
import com.easypeazy.Domain.Models.Recipe;
import com.easypeazy.Repository.Mapper.RecipeMapper;
import com.easypeazy.Repository.Interfaces.IRecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;


@Service
public class RecipeService implements IRecipeService {
    @Autowired
    private IRecipeRepository _recipeRepository;
    @Autowired
    private RecipeMapper _recipeMapper;

    public RecipeService(RecipeMapper recipeMapper) {
        this._recipeMapper = recipeMapper;
    }

    @Override
    public Collection<Recipe> retrieveAllRecipes() {
        List<com.easypeazy.Repository.Models.Recipe> recipes = _recipeRepository.findAll();
        List<Recipe> results = new ArrayList<Recipe>();
        for (com.easypeazy.Repository.Models.Recipe e : recipes)
        {
            results.add(_recipeMapper.MapToDomain(e));
        }
        return results;
    }

    @Override
    public Recipe retrieveRecipeById(int id) {
        Optional<com.easypeazy.Repository.Models.Recipe> recipe = _recipeRepository.findById(id);
        Recipe result = _recipeMapper.MapToDomain(recipe.get());
        return result;
    }

    @Override
    public void createRecipe(Recipe recipe) {
        com.easypeazy.Repository.Models.Recipe dbRecipe = _recipeMapper.MapToDB(recipe);
        dbRecipe.setId(null);
        _recipeRepository.saveAndFlush(dbRecipe);
    }

    @Override
    public void updateRecipe(Recipe recipe) {
        var dbRecipe = _recipeRepository.findById((int) recipe.getId());
        dbRecipe.get().setRecipeName(recipe.getRecipeName());
        _recipeRepository.saveAndFlush(dbRecipe.get());
    }

    @Override
    public void deleteRecipeById(int id) {
        _recipeRepository.deleteById(id);
    }
}
