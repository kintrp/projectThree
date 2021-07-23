import React, { Component } from 'react'
import axios from 'axios';

export default class animals extends Component {

    state = {
        animals: []
    }

    getData = () => {
        axios.get('http:localhost:5000/api/animals')
        .then (response => {
            console.log(response);
            this.setState({
                animals: response.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount(){   
        this.getData();
    }

    render() {

        const animalList = this.state.animals(singleAnimal => {
            return (
                <div>
                    <h1>Display ALL animals</h1>
                    <h1>{singleAnimal.name}</h1>
                    <p>{singleAnimal.species}</p>
                </div>
            )
    
        })
    
        return (
            <div>
                {animalList}
            </div>
        )

    }
}


