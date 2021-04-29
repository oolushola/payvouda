import styles from './Button.module.css'

const Button = (props) => {
  return <button type="submit" className={ styles.button } onClick={ props.onCancel }>{ props.children }</button>
}

export default Button