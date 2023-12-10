import React from 'react'
import styles from './DashBoard.module.css'
import UserInfo from '../../components/UserInfo/UserInfo'
import Notes from '../../components/Notes/Notes'
import Weather from '../../components/weather/weather'

const DashBoard = () => {
  return (
    <div className={styles.gridlayout}>
      <div className={styles.UserInfoWrap} ><UserInfo/></div>  
 
      <div className={styles.notes} ><Notes /></div>
      <div className={styles.weather} > <Weather/> </div>
    </div>
  )               
}

export default DashBoard