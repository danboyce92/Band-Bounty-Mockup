import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeEmail, changeMessage } from '../store';

import Dropdown from './Dropdown';
import '../index.css';

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
    <div>
      <div className="w-7/12 mx-auto mt-24 h-full  grid grid-rows-6 grid-cols-10 gap-4 bg-gray-200 rounded-md pb-8">
        <span className="col-start-5 col-span-2 row-span-1 text-center mt-2 text-[32px] font-bold">
          Contact us
        </span>
        <form className="col-start-4 row-start-2 col-span-4 row-span-5 divide-y-8">
          <div className="col-start-4 row-start-2 row-span-1">
            <label className="mx-auto">Email address</label>

            <input
              onChange={handleEmailChange}
              placeholder="Enter your email address here.."
              type="text"
              size="45"
              className="py-3 px-2 rounded-md"
            />
          </div>
          <br />
          <div className="col-start-4 row-start-3">
            <label>Reason</label>
            <Dropdown
              options={options}
              value={selection}
              onChange={handleSelect}
            />
          </div>
          <br />
          <div className="col-start-4 row-start-4 row-span-3">
            <label>Message</label>
            <textarea
              onChange={handleMessageChange}
              id="text-area"
              type="text"
              placeholder="Enter message here.."
              className="rounded-md px-2 py-3"
            />
          </div>
        </form>
        <button className="col-start-8 row-start-6 col-span-2 bg-indigo-600 rounded-xl text-white m-auto px-8 py-3">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
