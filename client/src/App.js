import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './PlayerList';
class App extends React.Component {

  state = { 
      playerData: {}
    };
  
 componentDidMount() {
axios
.get(`http://localhost:5000/api/players`)
.then(res => { 
  this.setState({
    playerData: res.data
  })
})
.catch(err => console.log('yikes!!:', err))
 }
  render() {
    console.log(this.state.playerData)
    return (
     <div>
       <PlayerList player={this.state.playerData}/>
     </div>
   
      
    );
  }
}


export default App;
