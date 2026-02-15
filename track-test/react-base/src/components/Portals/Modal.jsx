import reactDOM from 'react-dom'
const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null

  return reactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: '50px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        background: 'purple',
        padding: '20px',
      }}
    >
      {children}
    </div>,
    document.body,
  )
}

export default Modal
