import React from 'react'
import Social from '../data/social'

export default props => {
  
  return Social.map(i => {
    return <>
    <a id={i.social} className="header__social font--minimum" href={i.link} target='_blank' rel="noopener"> /felipedeo </a>
    </>
  })
}
