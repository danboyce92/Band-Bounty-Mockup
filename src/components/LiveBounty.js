import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDoc, doc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';

import {
  toggleInfoModal,
  changeCurrentBounty,
  setBountyBio,
  setBountyLogo,
} from '../store';

const LiveBounty = ({ bounty, user }) => {
  const [confirmButtonToggle, setConfirmButtonToggle] = useState(false);
  const [artist, setArtist] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let logoLink;

  if (bounty.data().link) {
    logoLink = `${bounty.data().link}.png`;
  } else {
    logoLink = 'undefined.png';
  }

  const downloadLogo = () => {
    const storage = getStorage();
    getDownloadURL(ref(storage, logoLink))
      .then((url) => {
        dispatch(setBountyLogo(url));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBandBio = async () => {
    const docRef = doc(db, 'Bios', artist);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(setBountyBio(docSnap.data().bio));
    } else {
      dispatch(setBountyBio('Bio coming soon!'));
    }
  };

  const openBountyButton = () => {
    if (user) {
      dispatch(toggleInfoModal());
      getBandBio();
      downloadLogo();
    } else {
      navigate('/signin');
    }
  };

  return (
    <div>
      <div className="ml-4 relative flex flex-col">
        <div
          onClick={() => {
            dispatch(changeCurrentBounty(bounty.data()));
            setConfirmButtonToggle(!confirmButtonToggle);
            setArtist(bounty.data().artist);
          }}
          id="bounties-list"
          className={`${bounty.data().active && 'border-4 bg-green-300'} ${
            bounty.data().expiring && 'border-4 bg-rose-500'
          } ${
            !bounty.data().active &&
            !bounty.data().expiring &&
            'border-4 bg-slate-300'
          } mx-auto my-3 w-full sm:w-11/12 max-w-6xl  rounded-md flex flex-row divide-x-2 divide-slate-400`}
        >
          <div className="basis-2/12 text-center mt-5">
            {bounty.data().artist}
          </div>
          <div className="basis-2/12 text-center mt-5">
            {bounty.data().city}
          </div>
          <div className="basis-2/12 text-center mt-5">
            {bounty.data().funds}
          </div>
          <div className="basis-2/12 text-center mt-5">
            {bounty.data().target}
          </div>
          {bounty.data().expiration && (
            <div className="basis-4/12 text-center mt-5">
              {
                <Timer
                  id={bounty.id}
                  date={bounty.data().expiration}
                  funds={bounty.data().funds}
                  target={bounty.data().target}
                />
              }
            </div>
          )}
          {confirmButtonToggle &&
            !bounty.data().active &&
            !bounty.data().expiring && (
              <button onClick={openBountyButton} className="bg-green-300">
                Open Bounty
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default LiveBounty;
