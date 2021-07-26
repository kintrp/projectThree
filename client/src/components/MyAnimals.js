import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MyAnimals extends Component {

    state = {
        animals: []
    }

    getData = () => {
        axios.get('/api/animals/list')
        .then (response => {
            // console.log(response);
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

        const animalsByUser = [];
        for (let i = 0; i < this.state.animals.length; i++) {
            if (this.state.animals[i].owner === this.props.user._id) {
                animalsByUser.push(this.state.animals[i])
            }
        }
        // console.log(animalsByUser)

        const mappedAnimals = animalsByUser.map(singleAnimal => {
            return (
                <div key={singleAnimal._id} >
                     <Link to={`/animals/${singleAnimal._id}`}>{singleAnimal.name} </Link>
                </div> 
            )
        })
    
        return (
            <div >
                <h1>Your animals</h1>
                {mappedAnimals}

                <Link to='/add'>Add animal</Link>
            </div>
        )

    }
}
