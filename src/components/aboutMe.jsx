import Description from '../data/aboutMe'

export default props => {
  return (
    <div className="container__block">
      <div className="container__image container__image--about"></div>
      <h1 className="container__title font--medium no-margin">{props.title}</h1>
      {
        Description.map(text => {
          return <p style={{fontSize: 16}}>{text.paragraph}</p>
        })
      }
    </div>
  )
}
