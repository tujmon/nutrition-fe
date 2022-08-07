import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './style.module.scss';

ReactModal.setAppElement('body');
function Modal({ children, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <ReactModal
      isOpen
      onRequestClose={closeModal}
      className={styles.modal}
      ariaHideApp={false}
      contentLabel="Example Modal"
      overlayClassName={styles.overlayModal}
    >
      <button type="button" className={styles.closeButton} onClick={() => setIsOpen(false)}>
        <AiOutlineClose />
      </button>
      {children}
    </ReactModal>
  );
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default Modal;
