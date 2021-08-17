import React from 'react'
import image from '../assets/felipe.png'

export default props => 
  <div className="header">
    <div className="header__background"></div>
    <img className="header__image" src={image}></img>
    <h1 className="header__name font--maximum"> {props.name} </h1>
    <h2 className="header__desc font--medium.no-margin"> {props.desc} </h2>
    <div className="header__contact">
      <a className="header__social header__social--linkedin font--minimum" href="https://www.linkedin.com/in/felipedeo/" target='_blank' rel="noopener"> /felipedeo </a>
      <a className="header__social header__social--github font--minimum" href="https://github.com/felipecdeo" target='_blank' rel="noopener"> @felipecdeo </a>
      <a className="header__social header__social--mail font--minimum" href="mailto:devfelipedeo@gmail.com" target='_blank' rel="noopener"> devfelipedeo@gmail.com </a>
    </div>
  </div>

