import React, { useState } from 'react'
import styles from './Notes.module.css'

const Notes = () => {
  const [notesData,setData]=useState(JSON.parse(localStorage.getItem("userNotes")) )
  const handleChange=(e)=>{
    let data = e.target.value;
    setData(data)
    const value= JSON.stringify(data);
    localStorage.setItem("userNotes",value)
  }
  
  return (
    <>
    <div className={styles.notesSec}  >
        <h1>All notes</h1>
          <textarea className={styles.textSec} value={notesData}  placeholder='Type your text here....' onChange={(e)=>{handleChange(e)}} />
    </div>
    </>
  )
}

export default Notes