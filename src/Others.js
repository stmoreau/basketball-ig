import React from 'react';
import PlayerComponent from './PlayerComponent';
import FourOhFour from './FourOhFour';

export default function Others({ player }) {
    function returnName(){
        if(player && player.name && player.name.props && player.name.props.children){
            return player.name.props.children
        }else if(player && player.name){
            return player.name
        }else{
            return ''
        }
    }
    return(
        returnName() ? <PlayerComponent {...player} playerName={returnName()} /> : <FourOhFour/>
    )
}
