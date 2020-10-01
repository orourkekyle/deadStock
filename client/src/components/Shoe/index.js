import React from "react";
// import { ListItem } from "../List";
// import { Row, Col } from "../Grid";
import Card from "react-bootstrap/Card";

function Shoe({ shoe, brand, gender, year, image, colorway, price,  Button}) {
    return (
        <div>
        {/* <React.Fragment> */}
          
            <Card className="card-style border border-success">
                <Card.Body style={{height: 'auto', width: 'auto'}}>
                    <Card.Title>{shoe}</Card.Title>
                    <Card.Text>Brand: {brand}</Card.Text>
                    <Card.Text>Gender: {gender} Year: {year}</Card.Text>
                    <Card.Text>Colorway: {colorway}</Card.Text>
                    <Card.Text>Retail Price: {price}</Card.Text>
                    <Card.Img className="card-style" src={image} alt="shoe" />
                    <Button />
                </Card.Body>
            </Card>
        {/* </React.Fragment> */}
        </div>
    )

}

export default Shoe;

