// put together our login components (similar to signup)
import React, { Component } from "react";
import DataAreaContext from "../utils/DataAreaContext";
import axios from "axios";
import { Redirect } from 'react-router-dom';

function login() {
    const [user, setUser] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // useEffect(() => {
    //   loadBooks()
    // }, [])
  
    // function create() {
    //   API.getBooks()
    //     .then(res => 
    //       setBooks(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };
  
    // function createUser(id) {
    //   API.deleteBook(id)
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // }
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.title && formObject.author) {
        API.saveBook({
          title: formObject.title,
          author: formObject.author,
          synopsis: formObject.synopsis
        })
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }
    };
      

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form className="login">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                    <br>
                        <p>Or sign up <a href="/">here</a></p>
                    </br>
                </div>
            </div>
        </div>



    )

}