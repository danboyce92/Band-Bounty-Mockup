import React from "react";

import { FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";

const Footer = () => {

    return (
        <div>


            <div className=" flex flex-row bg-white justify-center mx-auto h-10 pt-2">
                        <div className="mx-2">Email: notreal@email.com |</div>     
                        <div className="mx-2"><a href="https://facebook.com"><FaFacebook size={24} /> </a></div>
                        <div className="mx-2"><a href="https://twitter.com"><FaTwitter size={24} /> </a></div>
                        <div className="mx-2"><a href="https://instagram.com"><FaInstagram size={24} /> </a></div>
                    </div>
            </div>
    )
}

export default Footer;