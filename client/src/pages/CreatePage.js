import React, {useState, useEffect, useContext}  from "react";
import {useHttp}  from '../hooks/http.hook'
import { AuthContext } from "../context/AuthContext";

export const CreatePage = () => {
  const {auth} = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])


  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link}, {
          Authorization: `Bearer ${auth.token}`
        })
      } catch (error) {}
    }
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
         <div className="input-field">
            <input 
              placeholder="Insert the link" 
              id="link" 
              type="text" 
              value={link}
              onChange={e => setLink(e.target.value)}
              onKeyDown={pressHandler}
              />
            <label htmlFor="link">Write a link</label>
          </div>
      </div>
    </div>
  )
}