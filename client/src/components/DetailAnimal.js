import React, { Component } from 'react'
import axios from 'axios';

export default class DetailAnimal extends Component {

    state = {
        name: '', 
        species: '', 
        sex: '', 
        description: '', 
        city: '', 
        castrated: '',
    }

    getData = () => {
		const id = this.props.match.params.id;
        // console.log(id)
		axios.get(`/api/animals/${id}`)
			.then(response => {
				// console.log(response.data)
				this.setState({
					name: response.data.name,
					species: response.data.species,
					sex: response.data.sex,
                    description: response.data.description,
                    city: response.data.city,
                    castrated: response.data.castrated,
				})
			})
			.catch(err => {
				console.log(err);
				if (err.response.status === 404) {
					this.setState({
						error: 'Not Found.'
					})
				}
			})
	}

    componentDidMount(){   
        this.getData();
    }

    deleteAnimal = () => {
        const id = this.props.match.params.id;
        console.log('delete', id)
		axios.delete(`/api/animals/${id}`)
			.then(() => {
				this.props.history.push('/animals');
			})
			.catch(err => console.log(err))
	}

    // deleteContact = (index) => {

    //     const ActorsCopy = [...this.state.ironContacts]
    //     ActorsCopy.splice(index,1)
    //     this.setState(state =>({
    //     ironContacts:[...ActorsCopy]
    //     }
    //   ))
    //   } 

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>

                <li> species: 
                    <strong> {this.state.species}</strong>
                </li>
                <li> sex: 
                    <strong> {this.state.sex ? "male" : "female"}</strong>
                    
                </li>
                <li>description: 
                    <strong> {this.state.description}</strong>
                </li>
                <li>city: 
                    <strong> {this.state.city}</strong>
                </li> 
                <li>castrated: 
                    <strong> {this.state.castrated ? "Yes" : "No"}</strong>
                </li>
                <button onClick={this.deleteAnimal}>Delete animal</button>
            </div>
        )
    }
}




