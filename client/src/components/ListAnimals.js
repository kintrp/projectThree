import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ListAnimals extends Component {

    state = {
        animals: [],
        queryCity: '',
        querySpecies: '',
    }

    handleInputC = e => {
        const userInput = e.target.value;
        console.log(userInput)
        this.setState({
          queryCity: userInput
        });
    }

    handleInput = e => {
        const userInput = e.target.value;
        console.log(userInput)
        this.setState({
            querySpecies: userInput
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
        const cityLowerCase = this.state.queryCity.toLowerCase();
        const speciesLowerCase = this.state.querySpecies.toLowerCase();

        // If query equals to city in animals array, push into filteredByCity
        const filteredByCity = [];
        for (let i = 0; i < this.state.animals.length; i++) {

            if ((this.state.animals[i].city.toLowerCase().includes(cityLowerCase)) 
                && (this.state.animals[i].species.toLowerCase().includes(speciesLowerCase))) { 
                filteredByCity.push(this.state.animals[i])
            }
        }

        console.log(filteredByCity)

        const animalyByCity = filteredByCity.map(singleAnimal => {
            return (
                <div style={right}>
                    <div key={singleAnimal._id} >
                        <li>
                        <Link to={`/animals/${singleAnimal._id}`}>{singleAnimal.name} </Link> 
                        </li>
                    </div>
                </div>
            )
        })
   
            return (
                <div>

                <h1>Search</h1>
                <div>

                    <div style={left}>

                        <div>
                        <p>What animal are you looking for?</p>
                        <input type="text" name="search" value={this.state.querySpecies} onChange={this.handleInput}/>
                        </div>

                        <div>
                        <p>Your area:</p>
                        <input type="text" name="search" value={this.state.queryCity} onChange={this.handleInputC}/>
                        </div>
                       
                    </div>

                    {animalyByCity}
                </div>
                </div>
            )
    }
}

const left = {
    float: 'left',
    marginLeft:'5%',
    width: '60%',
    backgroundColor:'white',
    textAlign:'left',
}

const right = {
    float: 'right',
    marginRight:'5%',
    width: '30%',
    backgroundColor:'white',
}






