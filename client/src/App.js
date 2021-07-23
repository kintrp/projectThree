import './App.css';
import React from 'react';
// import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route } from 'react-router-dom';
// import { login, signup } from './services/auth';
// import animals from './components/animals';
import AddAnimal from './components/AddAnimal';

class App extends React.Component {

  state = {
    user:this.props.user
  }

  setUser = user => {
    this.setState({
      user:user
    })
  }

  render() {
    return (
      <div>
        {/* <Navbar user ={this.state.user} setUser={this.setUser} /> */}

        <Route
          exact path='/signup'
          render={props=> <Signup setUser={this.setUser}{...props}/>}        
        />

        <Route
          exact path='/login'
          render={props=> <Login setUser={this.setUser}{...props}/>}        
        /> 

        <Route
          exact path='/add'
          render={props=> <AddAnimal setUser={this.setUser}{...props}/>}        
        />

        {/* <Route
          exact path='/animals'
          user={this.state.user}
          component={animals}
        /> */}

      </div>

    )
  }
}

export default App;
