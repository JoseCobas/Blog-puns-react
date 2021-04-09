import React from 'react'

function Pun({ pun, deletePun }) {
    let punDate = new Date(pun.date);

    const handleDeleteBtn = () => {
        deletePun(pun['_id'])
    } 
  return (
    <div>
        <article >
                <p>
                    {pun.content}

                    <br/>
                   {` ${punDate.getFullYear()}-${punDate.getMonth()}-${punDate.getDate()}`}
                </p>

                <button>Update</button>
                <button onClick={handleDeleteBtn}>Delete</button>

            </article>
      
    </div>
  )
}

export default Pun
