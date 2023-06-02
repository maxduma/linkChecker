import React, { useState }  from "react";

export const AuthPage = () => {
  const [form, setForm] = useState({
    email: '', password: ''
  })

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.name})
  }



  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorting Link</h1>
        <div className="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">Authenticate</span>
          <div>

          <div class="input-field">
            <input 
              placeholder="Type email" 
              id="email" 
              type="text" 
              name="email"
              className="yellow-input"
              onChange={changeHandler}
              />
            <label for="email">Email</label>
          </div>

          <div class="input-field">
            <input 
              placeholder="Type password" 
              id="password" 
              type="password" 
              name="password"
              className="yellow-input"
              onChange={changeHandler}
              />
            <label for="password">Password</label>
          </div>


          </div>
        </div>
        <div className="card-action">
          <button className="btn yellow darken-4" style={{marginRight: 10}}>Sing In</button>
          <button className="btn gray lighten-1 black-text">Auth</button>
        </div>
      </div>
      </div>
    </div>
  )
}