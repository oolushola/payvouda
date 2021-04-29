import UserItem from './UserList/UserItem'

const Users = props => {
  return (
    <div className="">
      <ul>
        {
          props.usersLists.map(user => {
            return <UserItem user={ user } key={ user.id } />
          })
        }
      </ul>
    </div>
  )
}

export default Users