import './index.scss'
import React from 'react'
import reactDOM from 'react-dom'

import Header from './components/header'
import Row from './components/Row.jsx'
import RowDif from './components/RowDif'

reactDOM.render(
  <>
    <Header name="Felipe Deo" desc="Junior Front-end DeveloperJunior Front-end Developer"/>
    <div className="container">
    <Row title="Abot me" desc="I’m a brazilian front-end dev looking for my first experience in a full time job."/>
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
