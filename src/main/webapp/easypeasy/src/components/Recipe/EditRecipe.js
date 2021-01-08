import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from 'react-bootstrap';

export class EditRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipeName: "", createdBy: ""};
        this.handleReciperecipeNameChange = this.handleReciperecipeNameChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.recipe != null || state.recipeName != "") {
            const prevName = state.prevName;
            const prevIngredients = state.prevIngredients;
            const createdBy = localStorage.getItem("userId");
            const name = prevName !== props.recipe.recipeName ? props.recipe.recipeName : state.recipeName;
            return {
                prevName: props.recipe.name, name,
                prevIngredients: createdBy,
            }
        }
    }

    handleReciperecipeNameChange(e) {
        this.setState({recipeName: e.target.value});
    }

    handleEdit(e) {
        e.preventDefault();
        const onEdit = this.props.onEdit;
        const currentlyEditing = this.props.currentlyEditing;
        var recipeName = this.state.recipeName;
        var createdBy = localStorage.getItem("userId");
        onEdit(recipeName, createdBy, currentlyEditing, this.props.recipe.id);
    }

    handleDelete = (e) => {
        e.preventDefault();
        const onDelete = this.props.onDelete;
        const currentlyEditing = this.props.currentlyEditing;
        var recipeName = this.state.recipeName;
        var createdBy = localStorage.getItem("userId");
        onDelete(recipeName, createdBy, currentlyEditing, this.props.recipe.id);
    }

    handleCancel() {
        const onEditModal = this.props.onEditModal;
        this.setState({recipeName: this.props.recipe.recipeName, createdBy: localStorage.getItem("userId")});
        onEditModal();
    }

    render() {
        const onShow = this.props.onShow;
        const validRecipe = true;
        return (
            <Modal show={onShow} onHide={this.handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="formControlsrecipeName">
                        <ControlLabel>Recipe recipeName</ControlLabel>
                        <FormControl type="text" required onChange={this.handleReciperecipeNameChange}
                                     value={this.state.recipeName}
                                     placeholder="Enter recipeName"/>
                    </FormGroup>
                    <FormGroup controlId="formControlscreatedBy">
                        <ControlLabel>Recipe Ingredients</ControlLabel>
                        <FormControl componentClass="textarea" type="text" required
                                     placeholder="Enter createdBy(separate by commas)"/>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={!validRecipe} bsStyle="success" onClick={this.handleEdit}>Save Recipe</Button>
                    <Button disabled={!validRecipe} bsStyle="success" onClick={this.handleDelete}>Delete Recipe</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};
