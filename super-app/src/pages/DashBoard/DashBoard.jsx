import React from 'react'
import styles from './DashBoard.module.css'
import UserInfo from '../../components/UserInfo/UserInfo'
import Notes from '../../components/Notes/Notes'

const DashBoard = () => {
  return (
    <div className={styles.gridlayout}>
      <div className={styles.UserInfoWrap} ><UserInfo/></div>  
      {/* <div className={styles.UserInfo}>UserInfo</div> */}
      {/* <div className={styles.notes}  >notes</div> */}
      <div className={styles.notes} ><Notes /></div>
      <div className={styles.weather} >weather</div>
    </div>
  )               
}

export default DashBoard