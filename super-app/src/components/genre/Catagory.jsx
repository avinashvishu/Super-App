import React from 'react'
import styles from './catagory.module.css'
const Catagory = () => {
  return (
    <>
    <div className={styles.contianer}>
        <div className={styles.leftContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.Logo}>Super app</h1>
        <h1 className={styles.SubHead} >Choose your entertainment <br /> category</h1>
      </div>
        </div>
        <div className={styles.rightContainer}>

        </div>
    </div>
    </>
  )
}

const selectedCatagory=()=>{
  return(
    <>
    
    </>
  )
}

export default Catagory