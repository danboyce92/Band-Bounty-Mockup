import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../store";
import Button from "./Button";
import Modal from "./Modal";

const ModalCreate = () => {

    const dispatch = useDispatch();

    const { toggle } = useSelector((state) => {
        return {
            toggle: state.createModal.toggle
        }
    });

    const handleClose = () => {
        dispatch(toggleModal(false));
    }

    const actionBar = <div>
        <Button onClick={() => {dispatch(toggleModal(false))}} primary rounded className="px-6 py-2">Confirm</Button>
        </div>

    const modalCreate = <Modal className="min-w-1/2 p-8" actionBar={actionBar} onClose={handleClose}>
                <>
                    <form className="grid grid-cols-6 grid-rows-6 h-full ">
                        <div className="col-start-1 col-span-3 row-start-1 row-span-6 border-2 p-6 text-center">
                        Until the artist confirms the event, the bounty target will be set to $10,000. <hr/> <br/>
                        Each bounty will be given 90 days to be confirmed by the artist. <hr/> <br/>
                        After a bounty has been confirmed it will be given a maximum of 90 more days to reach it's target. <hr/> <br/>
                        If the bounty expires, donors will be refunded what they contributed. <hr/> <br/> 
                        Start a bounty wherever you wish. If interest exists our team will try to locate a suitable venue
                        </div>
                        <label className="ml-8 col-start-4 mt-8">Artist</label>
                        <input className="mx-8 row-start-2 col-start-4  col-span-2 pl-4 py- border-2 border-gray-500 focus:border-black h-3/5" type="text" placeholder="Enter Artist name here.." />
                    
                        <label className="ml-8 col-start-4 row-start-3 mt-8">City</label>
                        <input className="mx-8 row-start-4 col-start-4 col-span-2 pl-4 border-2 border-gray-500 focus:border-black h-3/5" type="text" placeholder="Enter City here.." />
                        
                    </form>
                </>
                </Modal>


    return (
        <>
            {toggle && 
            modalCreate
            }
        </>
    )
}

export default ModalCreate;