import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className="f3">
        {
          'This Smart Brain estimates you age and gender appearance. Give it a try!'
        }
      </p>
      <div className="center">
        <div className=" center pa2 br3 shadow-2 ">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            placeholder="image url"
            autoFocus
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onPictureSubmit}
          >
            Estimate
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
