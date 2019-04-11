import React, { Component } from 'react';
import axios from 'axios';
import PostRequest from './PostRequest';
import DeleteRequest from'./DeleteRequest';
import './App.css';

class App extends Component {
  state = {
    persons: [],
    name: '',
    id: ''
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleChange2 = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit2 = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    let {persons}= this.state;
    return (
      <div className="App">
        <ul className='list-style'>
          {persons.map(person => <li>{person.name}</li>)}
        </ul>
        <PostRequest submit={this.handleSubmit} change={this.handleChange}/>
        <DeleteRequest submit={this.handleSubmit2} change={this.handleChange2}/>
      </div>
    );
  }
}

export default App;
