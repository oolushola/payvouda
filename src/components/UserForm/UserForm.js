import styles from './UserForm.module.css'
import React, { useRef, useState } from 'react'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/Button'

let errorMessage;

const UserForm = (props) => {
  const [noError, setError] = useState(true)

  const userAge = useRef()
  const username = useRef()

  const submitUserDataHandler = (event) => {
    event.preventDefault()
    if(username.current.value.trim().length <= 0 || userAge.current.value.trim().length <= 0  ) {
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
        name: username.current.value,
        age: userAge.current.value
      }
      props.onGetUserInfo(userInfo)
      username.current.value = ''
      userAge.current.value = ''
    }
  }

  const clearErrorHandler = (event) => {
    event.preventDefault()
    setError(true)
  }

  return (
    <React.Fragment>
      <form onSubmit={ submitUserDataHandler }>
        <div className={ styles.formControls }>
          <label>Username</label>
          <input type="text" placeholder="John Doe" ref={ username} />
        </div>
        <div  className={ styles.formControls }>
          <label>Age (Years)</label>
          <input type="number" placeholder="12" ref={ userAge } />
        </div>
        {/* <button type="submit" className = { styles.button }>Add User</button> */}
        <Button type="submit">Add User</Button>
      </form>
      {
        !noError ? (<Modal> 
            { errorMessage } 
            <Button onCancel={ clearErrorHandler }>Okay</Button>
          </Modal> 
        ) : ''
      }
    </React.Fragment>
  )
}

export default UserForm