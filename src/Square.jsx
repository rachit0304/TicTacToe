import React from 'react'

function Square({value, onClick
}) {

    
  return (
    <div>
      <button onClick={onClick} className='btn'>{value}</button>
    </div>
  )
}

export default Square
