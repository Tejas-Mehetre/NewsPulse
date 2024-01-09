import React from 'react'
import Loader from './Loader.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={Loader} alt="loader" />
      </div>
    )
}

export default Spinner;