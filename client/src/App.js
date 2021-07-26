import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import AddAnimal from './components/AddAnimal';
import ListAnimals from './components/ListAnimals';
import DetailAnimal from './components/DetailAnimal';
import MyAnimals from './components/MyAnimals';

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

        <Navbar user ={this.state.user} setUser={this.setUser} />

        <Switch>

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

        <Route
          exact path='/animals'
          render={props=> <ListAnimals setUser={this.setUser}{...props}/>}        
        />

        <Route
          exact path='/animals/private'
          render={props=> <MyAnimals user={this.state.user} setUser={this.setUser}{...props}/>}        
        />

        <Route
          exact path='/animals/:id'
          render={props=> <DetailAnimal setUser={this.setUser}{...props}/>}        
        />

    </Switch>

      </div>

    )
  }
}

export default App;
