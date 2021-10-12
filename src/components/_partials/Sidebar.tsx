import React from "react";
import {Offcanvas, Button} from 'react-bootstrap'
import {useState} from "react";

/**
 * Sidebar のコンポーネント
 * @constructor
 */
const Sidebar = ({width, height, children}) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
      <>
        <nav
            className="sidebar"
            style={{
              transform: `translatex(${xPosition}px)`,
              width: width,
              minHeight: height
            }}
        >
          <button
              onClick={() => toggleMenu()}
              className="toggle-menu"
              style={{
                transform: `translate(${width}px, 20vh)`
              }}
          ></button>
          <div className="content">{children}</div>
        </nav>


        {/*<Offcanvas show={show} onHide={handleClose}>*/}
        {/*  <Offcanvas.Header closeButton>*/}
        {/*    <Offcanvas.Title>Offcanvas</Offcanvas.Title>*/}
        {/*  </Offcanvas.Header>*/}
        {/*  <Offcanvas.Body>*/}
        {/*    Some text as placeholder. In real life you can have the elements you*/}
        {/*    have chosen. Like, text, images, lists, etc.*/}
        {/*  </Offcanvas.Body>*/}
        {/*</Offcanvas>*/}
      </>
  )

}

export default Sidebar