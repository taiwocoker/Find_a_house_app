import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => (
  <Loader 
    className='spin bg-1'
    type='Puff'
    color='#00BFFF'
    height={100}
    width={100}
    timeout={3000} 
  />
)

export default Loading
