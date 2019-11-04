import { toast } from 'react-toastify';

export const notify = (type, text) => {
  toast(text, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    type,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  });
};
