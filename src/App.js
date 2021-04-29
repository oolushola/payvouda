import './App.css';
import Container from './components/UI/Container'
import UserForm from './components/UserForm/UserForm'
import Users from './components/Users/Users'
import React, { useState } from 'react'

const App = () => {
  
  const [users, setUsers] = useState([
    { id: 1, name: 'Olushola Odejobi', age: 16, },
    { id: 2, name: 'Gambo Idowu', age: 50 },
    { id: 3, name: 'Fusai Truman', age: 20 }
  ])

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
        <Users usersLists = { users } />
      </Container>
      
    </div>
  );
}

export default App;
