import React from 'react'
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './catagory.module.css'
import Action from './../../assets/images/Action.png'
import Drama from '../../assets/images/Drama.png'
import Romance from '../../assets/images/Romance.png'
import Thriller from '../../assets/images/thriller.png'
import Western from '../../assets/images/Western.png'
import Horror from '../../assets/images/horror.png'
import Fantasy from '../../assets/images/fantasy.png'
import Music from '../../assets/images/music.png'
import Fiction from '../../assets/images/fiction.png'



const Catagory = () => {
  const catagoryList=[
    {
      id:1,
      type:"action",
      bg:"#FF5209",
      img: <img style={{width:"16rem",height:"10rem"}} src={Action} />
    },
    {
      id:2,
      type:"drama",
      bg:"#D7A4FF",
      img: <img style={{width:"16rem",height:"10rem"}} src={Drama} />
    },
    {
      id:3,
      type:"romance",
      bg:"#148A08",
      img: <img style={{width:"16rem",height:"10rem"}} src={Romance} />
    },
    {
      id:4,
      type:"thriller",
      bg:"#84C2FF",
      img: <img style={{width:"16rem",height:"10rem"}} src={Thriller} />
    },
    {
      id:5,
      type:"western",
      bg:"#902500",
      img: <img style={{width:"16rem",height:"10rem"}} src={Western} />
    },
    {
      id:6,
      type:"horror",
      bg:"#7358FF",
      img: <img style={{width:"16rem",height:"10rem"}} src={Horror} />
    },
    {
      id:7,
      type:"fantasy",
      bg:"#FF4ADE",
      img: <img style={{width:"16rem",height:"10rem"}} src={Fantasy} />
    },
    {
      id:8,
      type:"music",
      bg:"#E61E32",
      img: <img style={{width:"16rem",height:"10rem"}} src={Music} />
    },
    {
      id:9,
      type:"fiction",
      bg:"#6CD061",
      img: <img style={{width:"16rem",height:"10rem"}} src={Fiction} />
    }
  ]
  const [catagory,setCatagory]=useState([])
  const [lenghterror,setLenghtError]=useState(false)
  const nav = useNavigate()
  const handleClick=()=>{
    if(catagory.length<3){
      setLenghtError(true)
      return
    }else{
      setLenghtError(false)
      const key=JSON.stringify([...catagory])
      window.localStorage.setItem('UserChoices',key)
      nav('/dashBoard')
    }
  }

  return (
    <>
    <div className={styles.contianer}>
        <div className={styles.leftContainer}>
          <div className={styles.leftcontentBox}>
          <div className={styles.leftContent}>
            <h1 className={styles.Logo}>Super app</h1>
            <h1 className={styles.SubHead} >Choose your entertainment <br /> category</h1>
            <div className={styles.selectedCat}>
                <SelectedCatagory catagory={catagory} setCatagory={setCatagory}  />
                {lenghterror? (<div className={styles.errormsg} style={{marginTop:'2rem'}} ><svg width="20" height="18" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4607 1.17524C19.2557 0.818091 18.9601 0.52136 18.6037 0.31501C18.2473 0.108661 17.8428 0 17.4309 0C17.0191 0 16.6146 0.108661 16.2582 0.31501C15.9018 0.52136 15.6062 0.818091 15.4011 1.17524L1.1988 25.3402C0.252252 26.9516 1.38728 29 3.22859 29H31.6312C33.4725 29 34.6096 26.9495 33.661 25.3402L19.4607 1.17524ZM17.4268 8.28781C18.5349 8.28781 19.4027 9.24471 19.2909 10.3487L18.566 17.6124C18.5416 17.8978 18.411 18.1636 18.2001 18.3573C17.9892 18.551 17.7132 18.6585 17.4268 18.6585C17.1404 18.6585 16.8644 18.551 16.6535 18.3573C16.4426 18.1636 16.312 17.8978 16.2876 17.6124L15.5627 10.3487C15.5367 10.0882 15.5655 9.82513 15.6473 9.57645C15.7291 9.32778 15.8621 9.099 16.0377 8.90485C16.2133 8.7107 16.4277 8.55549 16.6669 8.44922C16.9062 8.34294 17.165 8.28796 17.4268 8.28781ZM17.4309 20.7151C17.9803 20.7151 18.5071 20.9333 18.8955 21.3218C19.2839 21.7102 19.5022 22.237 19.5022 22.7863C19.5022 23.3357 19.2839 23.8625 18.8955 24.2509C18.5071 24.6393 17.9803 24.8576 17.4309 24.8576C16.8816 24.8576 16.3548 24.6393 15.9664 24.2509C15.5779 23.8625 15.3597 23.3357 15.3597 22.7863C15.3597 22.237 15.5779 21.7102 15.9664 21.3218C16.3548 20.9333 16.8816 20.7151 17.4309 20.7151Z" fill="#FF0000"/>
</svg><p className={styles.errmsg} style={{color:'red',fontSize:'1.6rem',display:'inline',marginLeft:'1rem'}} >
                  
Minimum 3 category required</p></div>) :null}
            </div>
          </div>
          </div>

        </div>
        <div className={styles.rightContainer}>
          <div className={styles.TilesContainer}>
            {
              catagoryList.map((data,i)=>(
                <Tiles data={data} index={i} catagory={catagory} setCatagory={setCatagory} />
              ))
              
            }<button className={styles.NextBtn}
            onClick={handleClick}>
        Next Page
        </button>
                </div>
        </div>
      
    </div>  
    
    </>
  )
}

const SelectedCatagory=({catagory,setCatagory})=>{

  const handleClick=()=>{
       const type=catagory.indexOf(catagory.type)
       catagory.splice(type,1)
       setCatagory([...catagory])
  }

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
      <button key={idex} onClick={handleClick} style={{width:'11rem',height:'4rem',backgroundColor:"#148A08",color:'#FFFFFF',borderRadius:'2rem',padding:'0 1rem',fontFamily:'Roboto, sans-serif',fontSize:'1.4rem',padding:'0 1.5rem',cursor:'pointer'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <span>{capitalizeWords(cats)}</span>
          <span style={{color:'#085C00',fontSize:'1.8rem'}}>{"X"}</span>
        </div>
          {/* {capitalizeWords(cats)}{"X"} */}
      </button>))}
    </>
  )
}

const Tiles=({data,catagory,setCatagory,index})=>{
  const [isSelected,setSelected]=useState()
  const handleClick=(e)=>{
      if(catagory.includes(data.type)){
          const typeIndex = catagory.indexOf(data.type);
          catagory.splice(typeIndex,1);
          setCatagory([...catagory])
      }else{
        setCatagory([...catagory,data.type])
      }
      setSelected(!isSelected)
  }
  useEffect(() => {
    setSelected(catagory.includes(data.type) == true);
  });

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  return(
    <> 
    <div data={data} key={index} className={styles.catTiles} style={{backgroundColor:data.bg,border:`${isSelected?'5px solid #11B800':'none'}`}}  onClick={(e) => handleClick(e)} >

                      <h1 key={index} >{capitalizeWords(data.type)}</h1>
                      {data.img}
              </div>
       
    </>
  )
}



export default Catagory