import React from 'react'
import Banner from '../../components/register/Banner'
import Forms from '../../components/register/Form'
import styles from './RegisterPage.module.css'

function RegisterPage() {
  return (
    <>
    <div className={styles.FormContainer}>
      <Banner/>
      <Forms/>
   </div>
    
    </>
  )
}

export default RegisterPage