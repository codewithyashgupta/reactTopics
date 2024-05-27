import React from 'react'

function Buttons({imageUrl,title}) {
  return (
    <div>
      <button title={title}>
        <img src={imageUrl} alt="btn" />
      </button>
    </div>
  )
}

export default Buttons
