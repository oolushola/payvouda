import styles from './UserItem.module.css'

const UserItem = props => {
  return (
    <li className={ styles.list__item}>
      <h4>{ props.user.name } - { props.user.age } (Years Old)</h4>
    </li>
  )
}

export default UserItem