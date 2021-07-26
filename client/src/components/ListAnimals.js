import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ListAnimals extends Component {

    state = {
        animals: [],
        query: '',
    }

    handleInput = e => {
        const userInput = e.target.value;
        console.log(userInput)
        this.setState({
          query: userInput
        });
    }

    getData = () => {
        axios.get('/api/animals/list')
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

        // Turning query into lowercase and saving it to new Variable
        const cityLowerCase = this.state.query.toLowerCase();

        // If query equals to city in animals array, push into filteredByCity
        const filteredByCity = [];
        for (let i = 0; i < this.state.animals.length; i++) {
            if (this.state.animals[i].city.toLowerCase().includes(cityLowerCase)) {
                
                filteredByCity.push(this.state.animals[i])
            }
        }
        console.log(filteredByCity)

        const animalyByCity = filteredByCity.map(singleAnimal => {
            return (
                <div key={singleAnimal._id} >
                     <Link to={`/animals/${singleAnimal._id}`}>{singleAnimal.name} </Link>
                </div>
            )
        })
    
        return (
            <div >
                <h1>We are looking for a new home</h1>

                <div>
                <p>Select a city</p>
                <input type="text" name="search" value={this.state.query} onChange={this.handleInput}/>
                </div>

                {animalyByCity}
            </div>
        )
    }
}






