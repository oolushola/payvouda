import styles from './Modal.module.css'

const Modal = (props) => {
  return (
    <div className= { styles.modal }>
      <div className={ styles.modal__window}>
        { props.children }
      </div>
    </div>
  )
}

export default Modal