import React, { Component } from 'react'
import axios from 'axios';
// import service from '../services/service'

export default class AddAnimal extends Component {

    state = {
        imageUrl: '',
        name: '', 
        species: '',
        sex: '', 
        age:'',
        weight:'', 
        description: '', 
        city: '', 
        castrated: '',
    }

   handleSubmit = event => {
       event.preventDefault();
       console.log(this.state);
       axios.post('/api/animals/add', {
        imageUrl: this.state.imageUrl,
           name: this.state.name,
           species: this.state.species,
           sex: this.state.sex,
           age: this.state.age,
           weight: this.state.weight,
           description: this.state.description,
           city: this.state.city,
           castrated: this.state.castrated,
       })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    name: '',
                    species: '',
                    sex: '',
                    description: '',
                    city: '',
                    castrated: '',
                })
                this.props.getData();
            })
            .catch(err=>console.log(err));

    this.props.history.push('/private');
  };


    handleFileUpload = e => {
        
        const uploadData = new FormData();
        
        uploadData.append('imageUrl', e.target.files[0]);
        
        axios.post('api/animals/upload', uploadData)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    imageUrl: response.data.secure_url,
                })
            })
            .catch(err => console.log(err))
    }

   handleChange = event => {
       const {name, value} = event.target;
       this.setState({
           [name]:value
       })
   }

    render() {
        // console.log(this.state)

        return (
            <div>
                <h1>Provide characteristics ...</h1>

                <div style={contentBox}>
 
                    <form onSubmit={this.handleSubmit}>

                        <input type="file" name="imageUrl" onChange={this.handleFileUpload} />

                        <tr>
                            <td>
                                <label htmlFor="name">name:</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange} 
                                /> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">species:</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name="species"
                                value={this.state.species}
                                onChange={this.handleChange}
                                /> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">sex:</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name="sex"
                                value={this.state.sex}
                                onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">years:</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name="age"
                                value={this.state.age}
                                onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">kg:</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name="weight"
                                value={this.state.weight}
                                onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">city:</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name="city"
                                value={this.state.city}
                                onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">castrated:</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name="castrated"
                                value={this.state.castrated}
                                onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">description:</label>
                            </td>
                            <td>
                                <input
                                type="text"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                />
                            </td>
                        </tr>                

                        <button type="submit">Add this animal</button>

                    </form>
                </div>
        </div>

        )
    }
}

const contentBox = {
    display: 'flex',
    justifyContent:'center',
}


