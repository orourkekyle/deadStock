// put together our signup components
import React from "react";
import { Link } from "react-router-dom";


function login() {
    const [user, setUser] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // useEffect(() => {
    //   loadBooks()
    // }, [])
  
    // function loadBooks() {
    //   API.getBooks()
    //     .then(res => 
    //       setBooks(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };
  
    // function deleteBook(id) {
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
        API.createUser({
          username: formObject.username,
          password: formObject.password
        })
        // after submit load profile
          .then(res => getUser())
          .catch(err => console.log(err));
      }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form className="login">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" onChange={handleInputChange}></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" onChange={handleInputChange}></input>
                        </div>
                        <button type="submit" className="btn btn-default" onClick={handleFormSubmit}>Login</button>
                    </form>
                    <br>
                        <p>Or sign up <a href="/">here</a></p>
                    </br>
                </div>
            </div>
        </div>
    )
};