import React from "react";
// import { ListItem } from "../List";
// import { Row, Col } from "../Grid";
import{Card, CardImg, CardText, CardBody, CardTitle, Button, CardBlock}from "reactstrap";
import "../Shoe/style.css";

function Shoe({ shoe, brand, gender, year, image, colorway, price,  Button}) {
    return (
        <div>
        {/* <React.Fragment> */}
            <Card md={{size: 6, offset: 3}} >
                <CardBody  style={{height: '30rem', width: '15rem'}}>
                    <CardTitle>{shoe}</CardTitle>
                    <CardImg  top width="100%" src={image}  alt="shoe" />
                    <CardText className="card-text" style={{textColor: 'black'}}>Brand: {brand}</CardText>    
                    <CardText className="card-text">Gender: {gender} Year: {year}</CardText>
                    <CardText className="card-text">Colorway: {colorway}</CardText>
                    <CardText className="card-text">${price}</CardText>
                    <Button style={{fixed: 'bottom'}} />
                </CardBody>
            </Card>
        {/* </React.Fragment> */}
        </div>
    )

}

export default Shoe;

