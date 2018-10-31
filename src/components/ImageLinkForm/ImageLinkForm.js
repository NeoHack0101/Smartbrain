import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div className="ma3">
      <div className="f4">
        This Smart Brain estimates you age, gender and racial appearance. Give
        it a try!
      </div>
      <div className="center ma3">
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
