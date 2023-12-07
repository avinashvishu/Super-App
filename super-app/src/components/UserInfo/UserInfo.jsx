import React from 'react'
import styles from './UserInfo.module.css'
import UserPic from '../../assets/images/userImageCharacter.png'


const UserInfo = () => {

  const info=JSON.parse(localStorage.getItem("UserData"));
  const cats=JSON.parse(localStorage.getItem("UserChoices"));

  console.log(cats)

  return (
    <div className={styles.UserInfo} >
      <div className={styles.ImgSec}>
         <img className={styles.UserProfile} src={UserPic} alt="User profile picture" />
      </div>
        <div className={styles.DetailSec}>
          <div style={{width:"27.5rem",display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"start"}}>
           <div style={{fontSize:"2rem"}} >{info.name}</div>
           <div style={{fontSize:"2rem"}}>{info.email}</div>
           <div style={{fontSize:"3rem"}}>{info.UserName}</div>
          </div>
          
          <div  className={styles.TilesContainer} >
            {<SelectedCatagory catagory={cats} />}
          </div>
        </div>
                
    </div>
  )
}

const SelectedCatagory=({catagory})=>{

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  return(
    <>
      {catagory.map((cats,idex)=>(
      <button key={idex} style={{width:'13rem',height:'3rem',backgroundColor:"#9F94FF",color:'#FFFFFF',borderRadius:'2rem',padding:'0 1rem',fontFamily:'Roboto, sans-serif',fontSize:'1.4rem',padding:'0 1.5rem',cursor:'pointer'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <span>{capitalizeWords(cats)}</span>
          <span style={{color:'#085C00',fontSize:'1.8rem'}}></span>
        </div>
          {/* {capitalizeWords(cats)}{"X"} */}
      </button>))}
    </>
  )
}


export default UserInfo