import React from 'react'
import styles from './news.module.css'
import { useEffect } from 'react';

const News = () => {
    var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2023-12-10&' +
    'sortBy=popularity&' +
    'apiKey=d098bd40f47f459db535a02e0db0e8d6';

var req = new Request(url);

fetch(req)
.then(function(response) {
  console.log(response.json());
})



  return (
    <div className={styles.container} >News</div>
  )
}

export default News