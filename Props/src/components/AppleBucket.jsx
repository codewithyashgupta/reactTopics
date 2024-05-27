import React from 'react'

function AppleBucket({appleCount,basketName}) {
  return (
    <div className='apple-basket'>
      <h1>
        <span>{appleCount}</span>apples
      </h1>
      <p>{basketName}</p>
    </div>
  )
}

export default AppleBucket
