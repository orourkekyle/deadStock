import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function Shoe({ shoe, colorway, brand, gender, year, image, Button }) {
    return(
        <ListItem>
            <Row className="fluid">
                <Col size="md-9">
                    <h2>{shoe}</h2>
                    <h4>{colorway}</h4>
                    <h2>{brand}</h2>
                    <h4>{gender} {year}</h4>
                    <img src={image}></img>
                    <Button />
                </Col>
            </Row>
        </ListItem>
    )
}

export default Shoe;