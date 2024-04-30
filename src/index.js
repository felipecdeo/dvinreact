import './index.scss'
import React from 'react'
import reactDOM from 'react-dom'

import AboutMe from './components/aboutMe'
import Header from './components/header'
import Skills from './components/skills'
import Experiences from './components/experiences'
import image from './assets/felipe.png'


reactDOM.render(
  <>
    <div className="header">
      <div className="header__background"></div>
      <img className="header__image" src={image}></img>
      <h1 className="header__name font--maximum"> Felipe Deo </h1>
      <h2 className="header__desc font--medium.no-margin">Front-end Developer</h2>
      <div className="header__contact">
        <Header/>
      </div>
    </div>
    <div className="container">
    <AboutMe title="About me" desc="I’m a brazilian front-end dev looking for my first experience in a full time job."/>
    <Skills 
      title="Skills" 
      desc="HTML, Pug, CSS, Sass, SCSS, Typescript,TDD, SOLID, RecoilJS, ReduxJS, Vue, React, ReactNative, Angular, ES6, Git"
    />
      <div className="container__block"> 
        <div className="container__image container__image--about"></div>
        <h1 className="container__title font--medium no-margin">Work Experience</h1>
      <Experiences/>
      </div>
    </div>
  </>,
  document.getElementById('root')
)
