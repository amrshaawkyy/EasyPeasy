package com.easypeazy.Repository.Interfaces;

import com.easypeazy.Repository.Models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRecipeRepository extends JpaRepository<Recipe, Integer> {
}
