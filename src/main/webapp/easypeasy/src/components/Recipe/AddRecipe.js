import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from 'react-bootstrap';

export class AddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipeName: "", createdBy: ""};
        this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleRecipeNameChange(e) {
        this.setState({recipeName: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const onAdd = this.props.onAdd;
        var newName = this.state.recipeName;
        var newcreatedBy = localStorage.getItem("userId");
        var newRecipe = {recipeName: newName, createdBy: newcreatedBy};
        onAdd(newRecipe);
        this.setState({recipeName: "", createdBy: ""});
    }

    handleCancel() {
        const onAddModal = this.props.onAddModal;
        this.setState({recipeName: "", createdBy: ""});
        onAddModal();
    }

    render() {
        const onShow = this.props.onShow;
        const validRecipe = true;
        return (
            <Modal show={onShow} onHide={this.handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>New Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="formControlsName">
                        <ControlLabel>Recipe Name</ControlLabel>
                        <FormControl type="text" required onChange={this.handleRecipeNameChange}
                                     value={this.state.recipeName}
                                     placeholder="Enter Name"/>
                    </FormGroup>
                    <FormGroup controlId="formControlsIngredients">
                        <ControlLabel>Recipe Ingredients</ControlLabel>
                        <FormControl componentClass="textarea" type="text" required
                                     placeholder="Enter Ingredients(separate by commas)"/>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={!validRecipe} bsStyle="success" onClick={this.handleSubmit}>Save Recipe</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};
