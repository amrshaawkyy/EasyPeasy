package com.easypeazy.API.controllers;

import com.easypeazy.Domain.Models.Recipe;
import com.easypeazy.Domain.Interfaces.IRecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/recipes")
public class RecipeController {
    @Autowired
    private IRecipeService recipeService;

    @GetMapping
    public ResponseEntity<Collection<Recipe>> retrieveAllRecipes() {
        return new ResponseEntity<>(recipeService.retrieveAllRecipes(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity retrieveRecipeById(@PathVariable Integer id) {
        return new ResponseEntity<>(recipeService.retrieveRecipeById(id), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity createRecipe(@RequestBody Recipe recipe) {
        recipeService.createRecipe(recipe);
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity updateRecipe(@RequestBody Recipe recipe) {
        recipeService.updateRecipe(recipe);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteRecipeById(@PathVariable int id) {
        recipeService.deleteRecipeById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
