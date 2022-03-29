import react from "react";
import links from '../data/works'

  export default props => {
      
    return links.map(i => {
        return <>
        <a className="font--desc no-margin" href={i.link} target='_blank' rel="noopener">
          {i.name}
        </a>
        <span className="font--light"> {i.time} </span>
        <p className="container__desc font--minimum"> {i.desc} </p>
      </>
    })
  }
