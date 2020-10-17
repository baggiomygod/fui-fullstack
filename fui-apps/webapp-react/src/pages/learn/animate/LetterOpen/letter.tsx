import * as React from 'react'

import './letter.styl'
// https://wow.techbrood.com/fiddle/35185
function letterOpen () {
  return (
    <div className="wrapper">
    <div className="left">
        <div className="front">
            <div className="sectionWrap">
                <h1>封面</h1>
                <hr />
                <p className="preview">点击打开</p>
                <button className="openB">
                    <p>read more...</p>
                </button>
            </div>
        </div>

        <div className="back">
            <div className="sectionWrap">
                <h1>Left</h1>
                <hr />
                <p>left content</p>
            </div>
          </div>
      </div>
    <div className="middle">
        <div className="sectionWrap">
            <h1>Middle</h1>
            <hr />
            <p>content</p>
        </div>
    </div>

    <div className="right">
        <div className="sectionWrap">
            <h1>Right</h1>
            <hr />
            <p>right</p>
        </div>
        <button className="closeB">✕</button>
    </div>

    </div>
  )
}

export default letterOpen
