import Socials from '../data/socials'

export default props => {
  return Socials.map(social => {
    return <a id={social.name} className="header__social font--minimum" href={social.link} target='_blank' rel="noopener"> /felipedeo </a>
  })
}
