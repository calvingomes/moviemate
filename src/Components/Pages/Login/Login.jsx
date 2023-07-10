import React from 'react'
import Styles from './Login.module.css'
import LoginCard from '../../UI/LoginCard/LoginCard'

const Login = () => {
  return (
    <div className={Styles.primaryDiv}>
      <LoginCard />
    </div>
  )
}

export default Login