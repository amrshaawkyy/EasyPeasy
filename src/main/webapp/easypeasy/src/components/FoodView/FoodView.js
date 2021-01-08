import React, {Component} from "react";
import Aux from '../../hoc/AUX1/Aux1';
import FoodRecipes from '../FoodRecipes/FoodRecipes';
import Spinner from '../../components/UI/Spinner/Spinner';
import {withRouter} from "react-router-dom";

class FoodView extends Component {
    state = {
        FoodData: null,
        error: false
    }

    componentDidMount() {
        fetch('/recipes', {
            method: 'get',
            headers: {
                "Access-Control-Allow-Headers": "*",
                'Content-Type': 'application/json'
            },
        }).then((Response) => Response.json())
            .then((result) => {
                let floors = result;
                for (let index = 0; index < floors.length; index++) {
                    floors[index]["colorLoaded"] = null
                }
                this.setState({FoodData: floors});
            }).catch(error => {
            console.log('error', error)
            this.setState({loading: false})
        })
    }

    render() {
        return (
            <Aux>
                {this.state.FoodData ? <FoodRecipes foodRecipes={this.state.FoodData}/> : <Spinner/>}
            </Aux>
        );
    }
}

export default withRouter(FoodView);