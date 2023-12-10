import React, { useEffect, useState } from 'react'
import styles from './weather.module.css'
import axios from 'axios'
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { WiDegrees, WiHumidity } from "react-icons/wi";


const Weather = () => {
   
    const[weatherInfo,setInfo]=useState();

    useEffect(()=>{
        setTimeout(()=>{
            axios.get('http://api.weatherapi.com/v1/current.json?key=c44386b744c14eaface142928230912&q=Mumbai&aqi=no')
            .then(function (response) {
              // handle success
              setInfo(response.data)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
          },0)
        
        },[])
          let currentTime = new Date();
          let options = { timeStyle: 'short', hour12: true };
          let timeString = currentTime.toLocaleTimeString('en-US', options);
          let year = currentTime.getFullYear();
          let month = currentTime.getMonth()+1;
          let day = currentTime.getDate();
          if(day<10)return 0+day;
          let dateFormat = day+"-"+month +"-"+year;
 
  return (
    <div className={styles.container}>
        <div className={styles.head}>
            <span>
                {dateFormat}</span>
            <span>
                {timeString}
            </span>
        </div>
        <div className={styles.body} >
                {weatherInfo?(
                <>    <div className={styles.infoTab} >
                        <img src={weatherInfo.current.condition.icon} alt="Weather condition icon" style={{width:"7rem",height:"7rem"}} />
                        <p className={styles.infoText}>{weatherInfo.current.condition.text}</p>
                     </div>
                     <svg width="2" height="47" viewBox="0 0 2 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.765365" y1="46.0371" x2="0.765365" y2="0.924492" stroke="white" strokeWidth="0.776765"/>
</svg>

                     <div className={styles.infoTab} >
                       <div style={{fontSize:'3rem',marginBottom:"-1.5rem"}} >{weatherInfo.current.temp_c}<WiDegrees style={{margin:"-3rem",height:'7rem',width:'8rem'}} />C</div> 
                       <div style={{display:"flex"}} ><div><FaThermometerThreeQuarters size={"2rem"}/></div><div style={{fontSize:'1.2rem'}} >{weatherInfo.current.pressure_mb} mbar<br/>Pressure</div></div>
                     </div>
                     <svg width="2" height="47" viewBox="0 0 2 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.765365" y1="46.0371" x2="0.765365" y2="0.924492" stroke="white" strokeWidth="0.776765"/>
</svg>

                     <div className={styles.infoTab} >
                        <div  style={{display:"flex",gap:"1rem"}}><FaWind size={"2rem"}/><div  style={{fontSize:'1.2rem'}} >{weatherInfo.current.wind_kph}Km/h <br />Wind</div></div>
                        <div  style={{display:"flex",gap:"1rem"}}><BsDropletHalf size={"2rem"}/><div  style={{fontSize:'1.2rem'}} >{weatherInfo.current.humidity}% <br />Humidiy</div></div>
                        
                     </div>
                </> 
                ):(<></>)}
           
        </div>
    </div>
  )
}

export default Weather