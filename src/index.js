import './index.scss'
import React from 'react'
import reactDOM from 'react-dom'

import Header from './components/header'
import Container from './components/container'

reactDOM.render(
  <>
    <Header name="Felipe Deo" desc="Junior Front-end DeveloperJunior Front-end Developer"/>,
    <Container>
      <div className="container">
      <div className="container__block">
        <div className="container__image container__image--about"></div>
        <h1 className="container__title font--medium no-margin">About me</h1>
        <p className="container__desc no-margin"> I’m a brazilian front-end dev looking for my first experience in a full time job. </p>
      </div>
      <div className="container__block">
        <div className="container__image container__image--skills"></div>
        <h1 className="container__title font--medium no-margin">Skills</h1>
        <p className="container__desc no-margin">HTML , Pug, CSS, Sass / SCSS, Javascript / ES6, Json & Git / Github</p>
      </div>
      <div className="container__block">
        <div className="container__image container__image--work"></div>
        <h1 className="container__title font--medium no-margin">Work Experience</h1>
        <a className="font--desc no-margin" href="https://aceitacafe.com.br/" target='_blank' rel="noopener">
        · Aceita Café 
        </a>
        <span className="font--light"> (May 2021 / Jun 2021) </span>
        <p className="container__desc font--minimum"> Developed a freelance landing page for a coffee store. </p>
        <a className="font--desc no-margin" href="https://biosinergia.com.br/" target='_blank' rel="noopener">
        · Biosinergia
        </a>
        <span className="font--light"> (Jun 2021 / Jul 2021)  </span>
        <p className="container__desc font--minimum"> Developed a freelance landing page for a composting company. </p>
        <a className="font--desc no-margin" href="https://nomadfy.github.io/" target='_blank' rel="noopener">
        · Nomadfy 
        </a>
        <span className="font--light"> (Jul 2021 / Aug 2021) </span>
        <p className="container__desc font--minimum"> Developed a freelance webapp for a travel company. </p>
      </div>
      </div>
    </Container>
  </>,
  document.getElementById('root')
)
