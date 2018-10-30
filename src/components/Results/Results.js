import React from 'react'

const Results = ({ results }) => {
  if (results.gender) {
    return (
      <div
        style={{ backgroundColor: '#31393C' }}
        className="f5 white br1 w-20 center ma1"
      >
        <div className="flex flex-column ">
          <div>
            You look <span className="f4 b">{results.age}</span> years old{' '}
          </div>
          <div>
            are <span className="f4 b">{results.gender}</span>
          </div>
          <div>
            and racially
            <span className="f4 b"> {results.race} </span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="w-20 center ma1 ">
      <br />
      <br />
      <br />
    </div>
  )
}

export default Results
