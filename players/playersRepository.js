import {Player} from './players.js'
const allPlayers = [
    new Player(1,"Peter Forsberg",21,"Colorado",1973),
    new Player(2,"Mats Sundin",13,"Toronto",1971),
    new Player(3,"Niklas Lidström",5,"Detroit",1970),
]


function findAll(){
    return allPlayers
}

export {findAll}