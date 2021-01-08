import React, {Component} from 'react';
import Recipe from '../Recipe/Recipe';
import Aux from '../../hoc/AUX1/Aux1';
import './FoodRecipes.css';
import axios from '../../axios-order';
import {AddRecipe} from "../Recipe/AddRecipe";
import {EditRecipe} from "../Recipe/EditRecipe";
import {withRouter} from "react-router-dom";

class FoodRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: this.props.foodRecipes,
            recipes: [],
            showAdd: false,
            showEdit: false,
            currentlyEditing: 0
        };
        this.showAddModal = this.showAddModal.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    componentDidMount() {
        this.setState({recipes: this.props.foodRecipes});
    }

    showAddModal() {
        this.setState({showAdd: !this.state.showAdd});
    }

    showEditModal(index) {
        this.setState({currentlyEditing: index, showEdit: !this.state.showEdit});
    }

    addRecipe(recipe) {
        let recipes = this.state.recipes;
        recipes.push(recipe);
        fetch('/recipes', {
            method: 'post',
            headers: {
                "Access-Control-Allow-Headers": "*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        }).then(res => {
            this.setState({recipes: recipes});
            this.showAddModal();
        }).catch
        (error => {
            alert(error)
        })
    }

    editRecipe(newName, newIngredients, currentlyEditing, recipeId) {
        let recipes = this.state.recipes;
        recipes[currentlyEditing] = {id: recipeId, recipeName: newName, createdBy: newIngredients};
        fetch('/recipes', {
            method: 'put',
            headers: {
                "Access-Control-Allow-Headers": "*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipes[currentlyEditing])
        }).then(res => {
            this.setState({recipes: recipes})
            this.showEditModal(currentlyEditing);
        }).catch
        (error => {
            alert(error)
        })
    }

    deleteRecipe(newName, newIngredients, currentlyEditing, recipeId) {
        let recipes = this.state.recipes.slice()
        recipes.splice(currentlyEditing, 1);

        fetch('/recipes/' + recipeId, {
            method: 'delete',
            headers: {
                "Access-Control-Allow-Headers": "*",
                'Content-Type': 'application/json'
            },
        }).then(res => {
            console.log(recipes)
            this.setState({recipes: recipes, currentlyEditing: 0});
            window.location.reload(true);
            this.showEditModal(currentlyEditing);
        }).catch
        (error => {
            alert(error)
        })
    }

    handleSearchChange = (event) => {
        this.props.history.push(axios.defaults.baseURL + '/' + '?search=' + event.target.value);
        if (event.target.value === '')
            this.props.history.push('/Home');
        event.preventDefault();
        this.setState({filtered: this.props.foodRecipes});
        const value = event.target.value;
        const lowercasedValue = value.toLowerCase();
        this.setState(prevState => {
            const filtered = prevState.filtered.filter(el =>
                el.recipeName.toLowerCase().includes(lowercasedValue)
            );
            return {filtered};
        });
    };

    render() {
        const {filtered} = this.state
        let FoodRecipesTransformed = Object.keys(filtered)
            .map(igKey => {
                return [...Array(filtered[igKey])].map((_, i) => {
                    return filtered[igKey]
                });
            }).reduce((arr, el) => {
                return arr.concat(el)
            }, []);
        const recipes = this.state.recipes;
        return (
            <Aux>
                <div className="Search">
                    <div className="search__container">
                        <input onChange={this.handleSearchChange} className="search__input" type="text"
                               placeholder="Search"/>
                    </div>
                    <button onClick={this.showAddModal} className="button">Add Recipe</button>
                    {FoodRecipesTransformed != null &&
                    <Aux>
                        <AddRecipe onShow={this.state.showAdd} onAdd={this.addRecipe} onAddModal={this.showAddModal}/>
                        <EditRecipe onShow={this.state.showEdit} onEdit={this.editRecipe} onDelete={this.deleteRecipe}
                                    onEditModal={() => {
                                        this.showEditModal(this.state.currentlyEditing)
                                    }} currentlyEditing={this.state.currentlyEditing}
                                    recipe={recipes[this.state.currentlyEditing]}/></Aux>}
                </div>
                <div className="FoodRecipes">
                    <ul className="UL">
                        {
                            FoodRecipesTransformed.map((x, index) => {
                                return <li key={index}><Recipe randColor={x.colorLoaded} recipe={x}
                                                               status="APPOINTMENT"
                                                               onEditModal={() => this.showEditModal(index)}/>

                                </li>
                            })
                        }
                    </ul>
                </div>
            </Aux>
        );
    }

}

export default withRouter(FoodRecipes);