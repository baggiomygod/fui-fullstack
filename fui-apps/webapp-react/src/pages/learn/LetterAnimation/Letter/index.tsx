
import * as React from 'react'
import classnames from 'classnames'
import './index.styl'

// $(function() {
//   $(".openB").click(function() {
//       $(".left").addClass("open");
//       setTimeout(function() {
//           $(".right").addClass("open");
//       }, 250);
//       setTimeout(function() {
//           $(".back").addClass("open");
//       }, 350);
//   });

//   $(".closeB").click(function() {
//       setTimeout(function() {
//           $(".left").removeClass("open");
//       }, 250);
//       $(".right").removeClass("open");
//       setTimeout(function() {
//           $(".back").removeClass("open");
//       }, 600);
//   });
// });
export default function letter() {
  const [leftOpen, setLeftOpen] = React.useState(false)
  const [rightOpen, setRightOpen] = React.useState(false)
  const [backOpen, setBackOpen] = React.useState(false)
  const handleOpenB = () => {
    setLeftOpen(true)
    setTimeout(() => {
      setRightOpen(true)
    }, 250)
    setTimeout(() => {
      setBackOpen(true)
    }, 350);
  }
  const handleCloseB = () => {
      setTimeout(() => {
        setLeftOpen(false)
      }, 250);
      setRightOpen(false)
      setTimeout(() => {
        setBackOpen(false)
      }, 600);
  }
  return (
    <div className="wrapper">
      <div className={classnames('left', leftOpen)}>
          <div className="front">
              <div className="sectionWrap">
                  <h1>Title</h1>
                  <hr />
                  <p className="preview">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                  <button className="openB" onClick={handleOpenB}>
                      <p>read more...</p>
                  </button>
              </div>
          </div>
          <div className={classnames('back', backOpen)} >
              <div className="sectionWrap">
                  <h1>Left</h1>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                      no sea takimata</p>
              </div>
          </div>
      </div>
      <div className="middle">
          <div className="sectionWrap">
              <h1>Middle</h1>
              <hr />
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata</p>
          </div>
      </div>

      <div className={classnames('right', rightOpen)}>
          <div className="sectionWrap">
              <h1>Right</h1>
              <hr />
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata
              </p>
          </div>
          <button className="closeB" onClick={handleCloseB}>✕</button>
      </div>

    </div>
  )
}
