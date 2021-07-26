import React, { Component } from 'react'
import axios from 'axios';

export default class AddAnimal extends Component {

    state = {
        imageUrl: '',
        name: '', 
        species: '', 
        sex: '', 
        description: '', 
        city: '', 
        castrated: '',
    }

    // ///
    // handleFileUpload = e => {
    //     // console.log("The file to be uploaded is: ", e.target.files[0]);
     
    //     const uploadData = new FormData();
     
    //     // imageUrl => this name has to be the same as in the model since we pass
    //     // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    //     uploadData.append('imageUrl', e.target.files[0]);
     
    //     service
    //       .handleUpload(uploadData)
    //       .then(response => {
    //         // console.log("response is: ", response);
    //         // after the console.log we can see that response carries 'secure_url' which we can use to update the state
    //         this.setState({ imageUrl: response.secure_url });
    //       })
    //       .catch(err => console.log('Error while uploading the file: ', err));
    //   };
    //   ///

   handleSubmit = event => {
       event.preventDefault();
       console.log(this.state);
       axios.post('/api/animals/add', {
           name: this.state.name,
           species: this.state.species,
           sex: this.state.sex,
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
            .catch(err=>console.log(err))
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
            <form onSubmit={this.handleSubmit}>

                <input type="file" onChange={this.handleFileUpload} />

                <label htmlFor="name">name:</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange} 
                /> 
                <label htmlFor="name">species:</label>
                <input
                    type="text"
                    name="species"
                    value={this.state.species}
                    onChange={this.handleChange}
                /> 
                <label htmlFor="name">sex:</label>
                <input
                    type="text"
                    name="sex"
                    value={this.state.sex}
                    onChange={this.handleChange}
                />
                <label htmlFor="name">description:</label>
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                <label htmlFor="name">city:</label>
                <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                />
                <label htmlFor="name">castrated:</label>
                <input
                    type="text"
                    name="castrated"
                    value={this.state.castrated}
                    onChange={this.handleChange}
                />
                <button type="submit">Add this animal</button>
            </form>
        )
    }
}
