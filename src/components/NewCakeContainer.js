import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)

  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div className='wrapper'>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input
        type='text'
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cakes
      </button>
    </div>
  )
}

export default NewCakeContainer
