import './App.css';
import Container from './components/UI/Container'
import UserForm from './components/UserForm/UserForm'
import Users from './components/Users/Users'
import React, { useState } from 'react'

const App = () => {
  
  const [users, setUsers] = useState([])

  const getUserInfoHandler = (userData) => {
    const userArray = [...users]
    userArray.unshift(userData)
    setUsers(userArray)
  }

  return (
    <div className="App">
      <Container>
        <UserForm onGetUserInfo   = { getUserInfoHandler } />
      </Container>
      <Container>
        {
          users.length <= 0 ? (
            <h5>Oops! no users added yet! </h5>
          ) : (
            <Users usersLists = { users } />
          )
        }
      </Container>
      
    </div>
  );
}

export default App;
