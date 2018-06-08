import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  }
  updatePicture(value) {
    this.setState({picture: value})
  }
  updateName(value) {
    this.setState({name: value})
  }
  updateFriend() {
    let newFriends = this.state.friends.slice(0);
    newFriends.push({
      name: this.state.name,
      picture: this.state.picture
    })
    this.setState({
      friends: newFriends,
      name: '',
      picture: ''
    })
  }
  render() {
    const formattedFriends = this.state.friends.map((e,i,arr) => {
      return (
        <div key={i}>
          <img src={e.picture} alt=""/>
          <h3>{e.name}</h3>
        </div>
      )
    })
    return (
      <div className="App">
        <input
        type="text"
        placeholder="Name"
        onChange={(e) => this.updateName(e.target.value)}
        value={this.state.name}/>
        <input
        type="text"
        placeholder="Picture URL"
        onChange={(e) => this.updatePicture(e.target.value)}
        value={this.state.picture}/>
        <button onClick={() => this.updateFriend()}>Add Friend</button>
        {formattedFriends}
      </div>
    );
  }
}

export default App;
