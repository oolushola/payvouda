import styles from './UserForm.module.css'
import React, { useState } from 'react'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/Button'

let errorMessage;

const UserForm = (props) => {
  const [noError, setError] = useState(true)
  const [username, setUsername ] = useState('')
  const [userAge, setUserAge ] = useState('')

  const getUsernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const getUserAgeHandler = (event) => {  
      setUserAge(event.target.value)
  }

  const submitUserDataHandler = (event) => {
    event.preventDefault()
    if(username === "" || userAge === "") {
      errorMessage = 'Name and Age is required'
      setError(false)
    }
    else if (userAge < 0 ) {
      errorMessage = 'Age can not be less than zero(0)'
      setError(false)
    }
    else {
      const userInfo = {
        id: Math.random().toFixed(3),
        name: username,
        age: userAge
      }
      props.onGetUserInfo(userInfo)
      setUsername('')
      setUserAge('')
    }
  }

  const clearErrorHandler = (event) => {
    event.preventDefault()
    setError(true)
  }

  return (
    <div>
      <form onSubmit={ submitUserDataHandler }>
        <div className={ styles.formControls }>
          <label>Username</label>
          <input type="text" placeholder="John Doe" onChange={ getUsernameHandler } value={ username } />
        </div>
        <div  className={ styles.formControls }>
          <label>Age (Years)</label>
          <input type="number" placeholder="12" onChange={ getUserAgeHandler } value={ userAge } />
        </div>
        <button type="submit" className = { styles.button }>Add User</button>
      </form>
      {
        !noError ? (<Modal> 
            { errorMessage } 
            <Button onCancel={ clearErrorHandler }>Okay</Button>
          </Modal> 
        ) : ''
      }
    </div>
  )
}

export default UserForm