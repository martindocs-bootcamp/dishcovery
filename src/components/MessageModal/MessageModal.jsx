import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MessageModal = () => {
  return (
    <ToastContainer 
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      limit={1}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"   
      transition={Bounce}
    /> 
  )
}

export default MessageModal;