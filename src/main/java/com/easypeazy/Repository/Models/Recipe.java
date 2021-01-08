package com.easypeazy.Repository.Models;


import javax.persistence.*;

@Entity
@Table(name = "Recipe")
public class Recipe{

    @Id
    @GeneratedValue
    @Column(name="id")
    private Integer Id;
    @Column(name="recipename", columnDefinition="text")
    private String RecipeName;

    public Integer getCreatedBy() {
        return CreatedBy;
    }

    public void setCreatedBy(Integer createdBy) {
        CreatedBy = createdBy;
    }

    @Column(name="createdby")
    private Integer CreatedBy;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getRecipeName() {
        return RecipeName;
    }

    public void setRecipeName(String recipeName) {
        RecipeName = recipeName;
    }
}