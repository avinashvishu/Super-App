import React from 'react'
import styles from './DashBoard.module.css'
import UserInfo from '../../components/UserInfo/UserInfo'
import Notes from '../../components/Notes/Notes'
import Weather from '../../components/weather/weather'
import Timer from '../../components/Timmer/Timer'
import News from '../../components/news/News'

const DashBoard = () => {
  return (<>
    <div className={styles.outerGrid}>
    <div className={styles.gridlayout}>
      <div className={styles.UserInfoWrap} ><UserInfo/></div>  
 
      <div className={styles.notes} ><Notes /></div>
      <div className={styles.weather} > <Weather/> </div>
    </div>
    <div className={styles.NewsSec} ><News/></div>
    <div className={styles.timmerSec} > <Timer /> </div>

    </div>
    <button className={styles.button} >Browser</button>
    </>
  )               
}

export default DashBoard