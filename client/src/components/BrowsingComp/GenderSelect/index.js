import React from 'react';


function GenderSelect(props) {

    return (
        <div className="form-group">
            <label htmlFor="pwd">Gender:</label>
                <select id="gender" className="custom-select" aria-labelledby="dropdownMenuButton">
                    <option value="women">Women</option>
                    <option value="unisex">Unisex</option>
                    <option value="toddler">Toddler</option>
                    <option value="preschool">Preschool</option>
                    <option value="men" defaultValue>Men</option>
                    <option value="infant">Infant</option>
                    <option value="child">Child</option>
                </select>
        </div>
    )
}

export default GenderSelect;