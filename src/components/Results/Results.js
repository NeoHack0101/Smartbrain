import React from 'react'

const Results = ({ results }) => {
  if (results.gender) {
    return (
      <div className="f5 b ba b-white br1 w-20 center">
        age: {results.age} <br />
        {results.gender} <br />
        multicultural appearance: {results.race}
      </div>
    )
  }
  return (
    <div className="w-20 center">
      <br />
      <br />
      <br />
    </div>
  )
}

export default Results
