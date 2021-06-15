import React, { useState } from "react";
import './AddTodo.css';

export const Addtodo = (props) => {
  const [title, settitle] = useState("");
  // const [desc, setdesc] = useState("");

  const submit=(e)=>{
      e.preventDefault();
      if(!title){
          alert("Can not be blanked")
      }
      props.addtodo(title);
      settitle("");
      // setdesc("");

  }

  return (
      <div className="add-container">
        <div className="add-item">
        <h1>Create Your Own Youtube </h1>
        <h3>(Add Youtube Link)</h3>
        </div>
        <div className="add-item">
        <form onSubmit={submit} className='add-form'>

<div className="add-cont">
  <input
    type="text"
    value={title}
    onChange={(e)=>{settitle(e.target.value)}}
    className="add-input"
    id="title"
    aria-describedby="emailHelp"
    placeholder="Search Or Paste Youtube Link Here"
  />
</div>
{/* <div className="add-cont">
  <label htmlFor="desc" className="add-label">
    Todo Description
  </label>
  <input
    type="text"
    value={desc}
    onChange={(e)=>{setdesc(e.target.value)}}
    className="add-input"
    id="desc"
  />
</div> */}
<div className="add-cont">
<button type="submit" className="add-btn">
  ADD VIDEO
</button>
</div>

</form>
        </div>

        
      </div>
  );
};

export default Addtodo;