import links from '../data/works'

export default props => {
  return links.map(experience => {
    return <>
    { experience.link ?
      <a className="font--desc no-margin" href={experience.link} target='_blank' rel="noopener">
        {experience.name}
      </a> : 
      <span style={{fontWeight: 600}} className="font--desc no-margin">{experience.name}</span>
    }
    
    <span className="font--light"> {experience.time} </span>
    <p className="container__desc font--minimum"> {experience.desc} </p>
  </>
})
}
