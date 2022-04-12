import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const WA = ({data}) => {
  return (
    <div className="fixed bottom-5 right-5">
            <a href={data && `https://wa.me/${data.contact.wa}?text=${data.contact.wa_message}`}>
        <div className="bg-primary-50 p-3 rounded-full text-gray-50">
                <FaWhatsapp className="text-2xl mr-2" style={{ display:"inline-block" }}/>
                Reach me!
        </div>
            </a>
    </div>
  )
}

export default WA
