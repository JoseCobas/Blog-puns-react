import React from 'react'
import Pun from './Pun'

function PunList({puns, deletePun}) {
  return (
    <div>
        {
      puns.map( pun => (
        <Pun 
            key={pun['_id']}
            pun={pun}
            deletePun={deletePun} 
        />

        
        ))      
      }
      
    </div>
  )
}

export default PunList
