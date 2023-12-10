import React,{useState,useEffect} from 'react'
import styles from './browser.module.css'
import axios from 'axios';
import Profile from '../../assets/images/browserProfile.png'
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const [userchoice]=useState(JSON.parse(localStorage.getItem("UserChoices")));
  const nav = useNavigate()
  const [movieDetials,setDetials]=useState([])
  const genreCodes={
    action:28,
    drama:18,
    romance:10749,
    thriller:53,
    western:37,
    horror:27,
    fantasy:14,
    music:10402,
    fiction:9648,
  }
const fetchMovieApi=async(moviecode)=>{
   
     
// let url=`https://api.themoviedb.org/3/discover/movie?api_key=624cfe6e36baedf541eaabb6feb8acca&language=en-US&sort_by=release_date.desc&page=1&with_genres=${moviecode}`

 try{
    const res=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=624cfe6e36baedf541eaabb6feb8acca&language=en-US&sort_by=release_date.desc&page=1&with_genres=${moviecode}`)

    return res.data.results.slice(1, 5);
 }
 catch (error) {
    console.log(error);
  }
}
  const fetchMovies= async (valCode)=>{

       setDetials(await Promise.all(valCode.map((value)=>fetchMovieApi(value))));
  
       
  }
   


useEffect(()=>{

    let codes = userchoice.map((items)=>{return genreCodes[`${items}`]});
    // console.log(codes)
    fetchMovies(codes)
},[])
    

   
    
  
  

  
 
//    console.log(code)
console.log(movieDetials)
  return (
    <>
    <div className={styles.container}>
        <div className={styles.header}>
            <span>Super App</span>{" "}
            <img src={Profile}  alt="user profile" onClick={()=>{nav('/dashBoard')}} />
        </div>
        <h2>Entertainment according to your choice</h2>
        <div className={styles.details}>
              {movieDetials.length>1?(movieDetials.map(()=>{
                
              })):<></>}
        </div>

    </div>
    </>
  )
}

export default Browse


// https://image.tmdb.org/t/p/w500