import { createPortal } from 'react-dom'
import './modal.css'

const Modal = ({ isOpened, children, onClose }) => {
  if (!isOpened) {
    return null
  }
  return createPortal(
    <div>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.getElementById('portal-root'),
  )
}

export default Modal
