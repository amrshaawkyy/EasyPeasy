package com.easypeazy.Repository.Mapper;

import com.easypeazy.Domain.Models.Recipe;
import org.springframework.stereotype.Repository;

@Repository
public class RecipeMapper {

    public Recipe MapToDomain(com.easypeazy.Repository.Models.Recipe recipe)
    {
        Recipe r =  new Recipe();
        r.setId(recipe.getId());
        r.setRecipeName(recipe.getRecipeName());
        r.setCreatedBy(recipe.getCreatedBy());
        return  r;
    }


    public com.easypeazy.Repository.Models.Recipe MapToDB(Recipe recipe)
    {
        com.easypeazy.Repository.Models.Recipe r =  new com.easypeazy.Repository.Models.Recipe();
        r.setRecipeName(recipe.getRecipeName());
        r.setCreatedBy(recipe.getCreatedBy());
        return  r;
    }
}
