import react from "react";
import links from '../data/links'

  export default props => {
      
    return links.map(i => {
        return <>
        <a className="font--desc no-margin" href={i.link} target='_blank' rel="noopener">
          {i.name}
        </a>
        <span className="font--light"> (May 2021 / Jun 2021) </span>
        <p className="container__desc font--minimum"> Developed a freelance landing page for a coffee store. </p>
      </>
    })
  }
