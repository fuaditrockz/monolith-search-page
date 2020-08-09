import React from 'react'
import loadingGif from '../../assets/loading.gif'

const Loading = () => {
  return (
    <div className='universal-container width-full centerized-item'>
      <img src={loadingGif} alt='loading' width={200} />
      <h4 className='mt-3'>Loading...</h4>
    </div>
  )
}

export default Loading