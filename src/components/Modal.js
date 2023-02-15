import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar, className, buttonPosition }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div
        className={`absolute lg:top-1/4 lg:left-1/4 lg:w-1/2 p-10 bg-white rounded-lg ${className}`}
      >
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className={`flex ${buttonPosition}`}>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
