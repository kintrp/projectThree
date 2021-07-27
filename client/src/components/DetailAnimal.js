import React, { Component } from 'react'
import axios from 'axios';

export default class DetailAnimal extends Component {

    state = {
        imageUrl: '',
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
                    imageUrl: response.data.imageUrl,
					name: response.data.name,
					species: response.data.species,
					sex: response.data.sex,
                    age: response.data.age,
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

    render() {
        return (
            <div>

            <div style={X}>

               <div marginLeft='50px'>
                    <img src={this.state.imageUrl} width='200' height='200' alt="logo" ></img>
               </div>

                <div>

                    <tr> 
                        <td>
                            sex:
                        </td>
                        <td>
                            <strong> {this.state.sex ? "male" : "female"}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            city: 
                        </td>
                        <td>
                            <strong> {this.state.city}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            years: 
                        </td>
                        <td>
                            <strong> {this.state.age}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            castrated: 
                        </td>
                        <td>
                            <strong> {this.state.castrated ? "Yes" : "No"}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            description: 
                        </td>
                        <td>
                            <strong> {this.state.description}</strong>
                        </td>
                    </tr>
                    
                    <button onClick={this.deleteAnimal}>Delete animal</button>

                </div>
                
            </div>
            </div>

        )
    }
}

const X = {
    display: 'flex',
    flexDirection:'column',
    justifyContent:'Center',
    alignItems:'center',
}



