  
import React from 'react';

const cardStyle = {
  background: "transparent"
}

const Card = props => {
  return (

    <div className='card text-center animated flipInX' style={cardStyle} value={props.movieId}>
      {props.title ? (
        <h4 className='card-header'>{props.title}</h4>
      ) : ""}

      {/* <button type="button" className="btn btn-outline-success">Save Movie</button> */}

      {props.image ? (
        <img onClick={props.secondSearch ? () => props.reRun(props.title) : null} value={props.title} src={`http://image.tmdb.org/t/p/w185/${props.image}`} alt={props.title} className='card-img' />
      ) : ""}

      {props.vote ? (
        <h6 className='card-header' style={cardStyle} >Vote Average: {props.vote}</h6>
      ) : ""}

      <div className='card-body' style={cardStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default Card;