import React from 'react'
import styles from './Banner.module.css'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

 const Banner = () => {
  const [text]=useTypewriter(
    {
      words:['Discover new things on SuperApp'],
      loop:{},
      typeSpeed:150,
      deleteSpeed:50,
    }
  )
  return (
    <div className={styles.container} >
      <h1 className={styles.BannerQuote}>{text}<span style={{color:"#72DB73"}} ><Cursor cursorStyle="</>" /></span></h1>
      
      
    </div>
  )
}

export default Banner;