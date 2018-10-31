import React from 'react'

const Rank = ({ name, age }) => {
  if (age < 99) {
    return (
      <div className=" f3">
        {`Welcome ${
          name ? name.toUpperCase() : ''
        }, on you previous login you appeared ${age} years old`}
      </div>
    )
  }

  return (
    <div>
      <div className="b f3">{`Welcome ${name.toUpperCase()}`}</div>

      <div className="white f2" />
    </div>
  )
}

export default Rank
