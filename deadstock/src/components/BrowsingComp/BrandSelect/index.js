import React from 'react';

function BrandSelect(){
    return (  
        <div className="form-group">
            <label htmlFor="pwd">Brand:</label>
                <select id="brand" className="custom-select" aria-labelledby="dropdownMenuButton">
                    <option value="">Converse</option>
            {/* <!-- Setting the option for 5 as default --> */}
                    <option value="nike" defaultValue>Nike</option>
                    <option value="jordan">Jordan</option>
                    <option value="new balance">New Balance</option>
                    <option value="puma">Puma</option>
                    <option value="reebok">Reebok</option>
                    <option value="saucony">Saucony</option>
                    <option value="under armor">Under Armor</option>
                    <option value="vans">Vans</option>
                    <option value="yeezy">Yeezy's</option>
                    <option value="ADIDAS">Adidas</option>
                    <option value="ASIC">Asic</option>
                </select>
    </div>

    )
}
export default BrandSelect;