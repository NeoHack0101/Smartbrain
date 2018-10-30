import React from 'react'

const Rank = ({ name, age }) => {
  return (
    <div>
      <div className="b f3">
        {`Welcome ${
          name ? name.toUpperCase() : ''
        }, on you previous login you appeared ${age ? age : '...'} years old`}
      </div>

      <div className="white f2" />
    </div>
  )
}

export default Rank
