import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeEmail, changeMessage } from '../store';

import Dropdown from './Dropdown';
import '../styles/Contact.css';

const Contact = () => {
  const dispatch = useDispatch();

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

  return (
    <div id="Contact">
      <div className="w-7/12 min-w-[320px] sm:min-w-[550px] max-w-[40rem] mx-auto mt-24 h-full  bg-gray-200 rounded-md pb-8">
        <div className="p-6">
          <span className="flex justify-center text-[32px] font-bold py-4">
            Contact us
          </span>
          <form className="sm:px-36">
            <div className="py-4">
              <label className="">Email address</label>
              <br />
              <input
                onChange={handleEmailChange}
                placeholder="Enter your email address here.."
                type="text"
                size="31"
                className="py-3 px-2 rounded-md"
              />
            </div>
            <br />
            <div className="">
              <label>Reason</label>
              <Dropdown
                options={options}
                value={selection}
                onChange={handleSelect}
              />
            </div>
            <br />
            <div className="py-4">
              <label>Message</label>
              <br />
              <textarea
                onChange={handleMessageChange}
                id="text-area"
                type="text"
                cols={31}
                rows={4}
                placeholder="Enter message here.."
                className="rounded-md px-2 py-3 "
              />
            </div>
          </form>
          <button className=" bg-indigo-600 rounded-xl text-white px-8 py-3 sm:float-right mb-8">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
