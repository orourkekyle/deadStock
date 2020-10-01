import React from "react";


export default function SelectGender(props) {
    return (

        <select name="gender" className="custom-select" aria-labelledby="dropdownMenuButton" {...props}>
            <option defaultValue=""></option>
            <option value="women">Women</option>
            <option value="unisex">Unisex</option>
            <option value="toddler">Toddler</option>
            <option value="preschool">Preschool</option>
            <option value="men">Men</option>
            <option value="infant">Infant</option>
            <option value="child">Child</option>

        </select>
    )
}