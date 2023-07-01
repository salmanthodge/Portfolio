import "./FormStyles.css"


import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Messege</label>
        <textarea  rows="6" placeholder="type your messege here"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
