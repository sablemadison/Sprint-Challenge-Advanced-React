import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList =  ({players}) =>  {

    
        <div>
{players.map(card  => {<PlayerCard  player={player}/>

})}
        </div>
    
}

export default PlayerList;