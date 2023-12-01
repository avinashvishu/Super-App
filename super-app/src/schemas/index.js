import * as yup from 'yup';
const phoneRegExp = /^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}?$/
export const basicSchema=yup.object().shape({
    email:yup.string().email('Please enter a valid email').required('Field is required'),
    mobile:yup.string().matches(phoneRegExp,{message:'Please enter the valid phone number'}).required('Field is required'),
    name:yup.string().max(25).required('Field is required'),
    UserName:yup.string().required('Field is required')
    
})