import express from 'express'
const app = express()
const port = 3000 // "Radiofrekvens"

import { findAll } from './players/playersRepository.js';
import {PlayerDTO} from './playersDTO.js'

app.get('/api/player',(req,res)=>{
    let result = findAll().map(p=>
        new PlayerDTO(p.id,p.name,p.jersey,p.teamName,p.year)

    )
     res.json(result)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  



  