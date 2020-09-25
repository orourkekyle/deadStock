import React from 'react';
import Button from "reactstrap"


function SubmitBtn(props) {

    return (
      <Button type='submit' className='btn btn-default' id='run-search'>
         <i className='fa fa-search'></i>Search</Button>
         
        // <Button type="clear" className='btn btn-default' id='clear-all'><i className='fa fa-trash'></i> Clear Resulst</Button>
    
    )
} 

export default SubmitBtn;