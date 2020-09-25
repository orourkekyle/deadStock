import React from 'react';

function ShoeTable(props) {

    return (
        <div className="row">
            <div className="col-sm-12">
                <br></br>
                {/* <!-- This card will initially be made up of a card and wells for each of the articles retrieved --> */}
                <div className="card">
                    {/* <!-- card Heading for the retrieved articles box --> */}
                    <div className="card-header">
                        <strong>
                            <i className="fa fa-table"></i> Top Shoes</strong>
                    </div>
                    {/* <!-- This main card will hold each of the resulting articles --> */}
                    <div className="card-body" id="shoeList">
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShoeTable;