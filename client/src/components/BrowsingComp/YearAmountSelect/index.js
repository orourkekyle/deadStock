import React from 'react';


function YearAmountSelect(){

    return (
        <div className="form-group">
            <label htmlFor="release-year">Release Year (Optional):</label>
                <input type="text" className="form-control" id="release-year"></input>
        
        
         <div className="form-group">
            <label htmlFor="pwd">Number of Shoes:</label>
              <select id="shoe-count" className="custom-select" aria-labelledby="dropdownMenuButton">
                   <option value="10">10</option>
                                    {/* <!-- Setting the option for 5 as default --> */}
                    <option value="50" defaultValue>50</option>
                    <option value="100">100</option>
             </select>
        </div>
        </div>
    )
}

export default YearAmountSelect;