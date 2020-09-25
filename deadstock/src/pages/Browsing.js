// set up browsing (through external api's) components
import React from "react";
import Navbar from "../components/Navbar";
// import browsing from "../components/browsing/browsing";
import YearAmountSelect from "../components/BrowsingComp/YearAmountSelect";
import BrandSelect from "../components/BrowsingComp/BrandSelect";
import GenderSelect from "../components/BrowsingComp/GenderSelect";
import ShoeTable from "../components/BrowsingComp/ShoeTable";

function Browsing() {
     return (
        <div>
            <h1>Browsing</h1>
                <div className="search">
                    {/* <Button id="hideButton" onClick="hideFunction()">Search</Button> */}
                    {/* //Main Bootstrap Search */}
                        <div className="container" id="myContainer">
                            <form role="form">

   
                        <YearAmountSelect />
                        <BrandSelect />
                        <GenderSelect />

                            {/* <!-- Here we have our final submit button --> */}
              <             button type="submit" className="btn btn-default" id="run-search">
                                <i className="fa fa-search"></i> Search</button>
                            <button className="btn btn-default" id="clear-all">
                                <i className="fa fa-trash"></i> Clear Results</button>
                    </form>
                </div>
            </div>

            {/* <!-- section to display shoes in --> */}
          <ShoeTable />
        </div>
    )
}

export default Browsing;