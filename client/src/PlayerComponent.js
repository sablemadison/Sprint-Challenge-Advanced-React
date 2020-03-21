import React, { useState } from 'react';
import axios from 'axios';
import PlayerCards from './playerCards';

class PlayerComponent extends React.Component {

    constructor() {
        super();
        this.state = {};
        useEffect(()=> {
            axios.get('http://localhost:5000/api/players')
            .then(dataObj => {
                console.log('data here:',dataObj)
                this.setState(dataObj)
            })
            .catch(error => {
                console.log('error message:', error)
              })
    }, [])
    }
    
    
    render() {
        return dataObj.map((object)=> {
          <PlayerCards  name={object.name} country={object.country} id={object.id} />
        })
    }
}
export default PlayerComponent;