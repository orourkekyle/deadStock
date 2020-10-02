import React from "react";
// import { ListItem } from "../List";
// import { Row, Col } from "../Grid";
import Card from "react-bootstrap/Card";
import "../Shoe/style.css";

function Shoe({ shoe, brand, gender, year, image, colorway, price,  Button}) {
    return (
        <div>
        {/* <React.Fragment> */}
            <Card>
                <Card.Body  style={{height: '30rem', width: '14rem'}}>
                    <Card.Title>{shoe}</Card.Title>
                    <Card.Img  src={image}  alt="shoe" />
                    <Card.Text className="card-text" style={{textColor: 'black'}}>Brand: {brand}</Card.Text>    
                    <Card.Text className="card-text">Gender: {gender} Year: {year}</Card.Text>
                    <Card.Text className="card-text">Colorway: {colorway}</Card.Text>
                    <Card.Text className="card-text">${price}</Card.Text>
                    <Button style={{fixed: 'bottom'}} />
                </Card.Body>
            </Card>
        {/* </React.Fragment> */}
        </div>
    )

}

export default Shoe;

