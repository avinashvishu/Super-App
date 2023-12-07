import React from 'react'
import styles from './Notes.module.css'

const Notes = () => {
  return (
    <>
    <div className={styles.notesSec}  >
        <h1>All notes</h1>
        <div className={styles.textAreaWrap} >
          <input type="text" />
        </div>
    </div>
    </>
  )
}

export default Notes