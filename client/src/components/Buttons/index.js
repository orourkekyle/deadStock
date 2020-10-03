import React from 'react';
import {Button} from "reactstrap";
import "./style.css";


export function AscPriceBtn(props){
    return ( 
        <Button color="success" className=" text-center" style={{marginBottom: 5, fontFamily: "Courier New", fontStyle: "initial" }}>Sort Price from High to Low </Button>
    )
}

export function DescPriceBtn(){
    return (
        <Button color="success" className="text-center" style={{marginBottom: 5, fontFamily: "Courier New", fontStyle: "oblique"}}>Sort Price from Low to High</Button>
    )
}

export function AscYearBtn(){
    return (
        <Button color="success" className="text-center" style={{marginBottom: 5, fontFamily: "Courier New", fontStyle: "oblique"}}> Sort from Oldest to Newest</Button>
    )
}

export function DescYearBtn(){
    return (
        <Button color="success" className="text-center" style={{marginBottom: 5, fontFamily: "Courier New", fontStyle: "oblique"}}> Sort from Newest to Oldest</Button>
    )
}




