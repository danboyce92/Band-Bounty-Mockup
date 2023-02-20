import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changeEmail,
  changeMessage,
  setErrorEmail,
  setErrorReason,
  setErrorMessage,
  resetPage,
} from '../store';

import Dropdown from './Dropdown';
import { sendMessageDb } from '../firebase/firebase';
import '../styles/Contact.css';

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, email, message } = useSelector((state) => {
    return {
      error: state.contact.error,
      email: state.contact.email,
      message: state.contact.message,
    };
  });

  //selection is the chosen option in the dropdown menu
  const [selection, setSelection] = useState(null);

  const options = [
    {
      label: 'Venue',
      value: 'venue',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  const handleMessageChange = (e) => {
    dispatch(changeMessage(e.target.value));
  };

  const sendButton = () => {
    //handles everything when send button is pushed.
    //Check for errors
    if (!email) {
      dispatch(setErrorEmail());
    }
    if (!selection) {
      dispatch(setErrorReason());
    }
    if (!message) {
      dispatch(setErrorMessage());
    }
    if (!email || !selection || !message) {
      return;
    }
    sendMessageDb(email, selection, message);
    navigate('/');
    dispatch(resetPage());
  };

  return (
    <div id="Contact">
      <div className="w-7/12 min-w-[320px] sm:min-w-[550px] max-w-[550px] mx-auto mt-24 h-full  bg-gray-200 rounded-md pb-8">
        <div className="px-3 sm:p-6">
          <span className="flex justify-center text-[32px] font-bold py-4">
            Contact us
          </span>
          <form className="sm:px-28">
            <div className="py-4">
              <label className="">Email address</label>
              <div className="text-red-300">{error.email}</div>

              <input
                onChange={handleEmailChange}
                placeholder="Enter your email address here.."
                type="text"
                size="31"
                className={`${error.emailField} py-3 px-2 rounded-md`}
              />
            </div>
            <br />
            <div className="">
              <label>Reason</label>
              <div className="text-red-300">{error.reason}</div>
              <Dropdown
                options={options}
                value={selection}
                onChange={handleSelect}
                errorChange={error.reasonField}
              />
            </div>
            <br />
            <div className="py-4">
              <label>Message</label>
              <div className="text-red-300">{error.message}</div>
              <textarea
                onChange={handleMessageChange}
                id="text-area"
                type="text"
                cols={31}
                rows={4}
                placeholder="Enter message here.."
                className={`${error.messageField} rounded-md px-2 py-3`}
              />
            </div>
          </form>
          <div className="flex justify-center">
            <button
              onClick={sendButton}
              className=" bg-indigo-600 rounded-xl hover:bg-indigo-500 text-white px-8 py-3 sm:float-right mb-8"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
