import React from "react";


export default function SelectBrand(props) {
    return (
        <select name="brand" className="custom-select" aria-labelledby="dropdownMenuButton" {...props}>
            <option placeholder="Search by Brand"defaultValue="">Search by Brand</option>
            <option value="nike">Nike</option>
            <option value="puma">Puma</option>
            <option value="vans">Vans</option>
            <option value="converse">Converse</option>
            <option value="jordan">Jordan</option>
            <option value="new balance">New Balance</option>
            <option value="reebok">Rebook</option>
            <option value="saucony">Saucony</option>
            <option value="under armor">Under Armor</option>
            <option value="yeezy's">Yeezy's</option>
            <option value="adiddas">Adidas</option>
            <option value="ASIC">ASIC</option>
        </select>
    )
}