import React, { useState, useEffect }  from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
  const message = useMessage()

  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (error) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorting Link</h1>
        <div className="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">Authenticate</span>
          <div>

          <div className="input-field">
            <input 
              placeholder="Type email" 
              id="email" 
              type="text" 
              name="email"
              className="yellow-input"
              onChange={changeHandler}
              />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input 
              placeholder="Type password" 
              id="password" 
              type="password" 
              name="password"
              className="yellow-input"
              onChange={changeHandler}
              />
            <label htmlFor="password">Password</label>
          </div>


          </div>
        </div>
        <div className="card-action">
          <button 
          className="btn yellow darken-4" 
          style={{marginRight: 10}}
          disabled={loading}
          >
            Sing In
          </button>
          <button 
            className="btn gray lighten-1 black-text"
            onClick={registerHandler}
            disabled={loading}
            >
            Auth
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}