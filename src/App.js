import React, { Component } from 'react';
import './App.css';
// import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.json())
    // .then(data => console.log(data));
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
      .then(data => console.log(data))
      .catch(error => console.log(error.message));

    
    // axios.post('https://jsonplaceholder.typicode.com/posts', 
    // {
    //   UserId: 1,
    //   Title: "abusayed",
    //   Body: "sayed"
    // })
    // .then(response => console.log(response))


    
    // axios.put('https://jsonplaceholder.typicode.com/posts/1', 
    // {
    //   UserId: 1,
    //   Title: "abusayed",
    //   Body: "sayed"
    // })
    // .then(response => console.log(response))



    // axios.delete('https://jsonplaceholder.typicode.com/posts/1', 
    // {
    //   UserId: 1,
    //   Title: "abusayed",
    //   Body: "sayed"
    // })
    // .then(response => console.log(response))

  }


  render(){
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
