import "./Cards.css"

const Card =  ({id,desc,img,title})=>{


  return (
    <div className="cardContainer">
        <h2> {title} </h2>
        <img className="cardImg" src={img} alt="img" />
       
        <div> <p  style={{}} className="par">{desc}</p></div>

    </div>
  )
}

export default Card