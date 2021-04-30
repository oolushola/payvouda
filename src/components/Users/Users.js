import UserItem from './UserList/UserItem'
import Wrapper from '../UI/Handlers/Wrapper'

const Users = props => {
  return (
    <Wrapper>
      <ul>
        {
          props.usersLists.map(user => {
            return <UserItem user={ user } key={ user.id } />
          })
        }
      </ul>
    </Wrapper>
  )
}

export default Users