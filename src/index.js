import './index.scss'
import React from 'react'
import reactDOM from 'react-dom'

import Header from './components/header'
import Row from './components/Row.jsx'
import RowDif from './components/RowDif'
import image from './assets/felipe.png'


reactDOM.render(
  <>
    <div className="header">
      <div className="header__background"></div>
      <img className="header__image" src={image}></img>
      <h1 className="header__name font--maximum"> Felipe Deo </h1>
      <h2 className="header__desc font--medium.no-margin"> Junior Front-end DeveloperJunior Front-end Developer </h2>
      <div className="header__contact">
        <Header/>
      </div>
    </div>
    <div className="container">
    <Row title="About me" desc="I’m a brazilian front-end dev looking for my first experience in a full time job."/>
    <Row title="Skills" desc="HTML , Pug, CSS, Sass / SCSS, Javascript / ES6, Json & Git / Github"/>
      <div className="container__block"> 
        <div className="container__image container__image--about"></div>
        <h1 className="container__title font--medium no-margin">Work Experience</h1>
      <RowDif/>
      </div>
    </div>
  </>,
  document.getElementById('root')
)
