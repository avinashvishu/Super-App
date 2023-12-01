import React from "react";
import styles from "./Form.module.css";
import { useFormik} from "formik";
import { basicSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";




const Form = () => {
  const navigate =useNavigate();
  const onSubmit=(values,actions)=>{
    
    console.log(values)
    console.log(actions)
    alert(JSON.stringify(values, null,1));
    let data = JSON.stringify(values);
    localStorage.setItem("UserData",data)
    console.log('submitted')
    navigate('/catagory')
  }
 
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
      initialValues:{
        name:'',
        UserName:'',
        email:'',
        mobile:'',
        
      },validationSchema:basicSchema,
       onSubmit,


    })
    
    

    console.log('formik',errors)

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.formHead}>Super app</h1>
        <p className={styles.SubHead}>Create your new account</p>
        <form onSubmit={handleSubmit} autoComplete="off" >
          <div className={styles.textField}>
            <div className={styles.inputBlock}>
              <input type="text" placeholder="Name" name="name"  onBlur={handleBlur} onChange={handleChange} value={values.name} className={errors.name && touched.name ? (styles.errorinput):""} />
              {errors.name && touched.name ? <p className={styles.errormsg} >{errors.name}</p>:null}
            </div>

            <div className={styles.inputBlock}>
              <input type="text" placeholder="UserName" name="UserName"  onBlur={handleBlur} onChange={handleChange} value={values.UserName} className={errors.UserName && touched.UserName ? (styles.errorinput):""} />
              {errors.UserName && touched.UserName ? <p className={styles.errormsg} >{errors.UserName}</p>:null}
            </div>

            <div className={styles.inputBlock}>
              <input type="email" placeholder="Email" name="email"  onBlur={handleBlur} onChange={handleChange} value={values.email} className={errors.email && touched.email ? (styles.errorinput):""} />
              {errors.email && touched.email ? <p className={styles.errormsg} >{errors.email}</p>:null}
            </div>

            <div className={styles.inputBlock}>
              <input type="number"  placeholder="Mobile" name="mobile"  onBlur={handleBlur} onChange={handleChange} value={values.mobile} className={errors.mobile && touched.mobile ? (styles.errorinput):""} />
              {errors.mobile && touched.mobile ? <p className={styles.errormsg} >{errors.mobile}</p>:null}
            </div>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
            Share my registration data with Superapp
          </label>
          {errors.checkbox && touched.checkbox?<p className={styles.errormsg} >{errors.checkbox}</p>:null}
          </div>
        
          <button className={styles.SignUpButtom} type="submit" >SIGN UP</button>
          <p className={styles.Tc}>By clicking on Sign up. you agree to Superapp <span style={{color:"#72DB73"}}>Terms and Conditions of Use</span></p>
          <p className={styles.Tc}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color:"#72DB73"}}>Privacy Policy</span></p>
        </form>
        
      </div>
    </>
  );
};

export default Form;
