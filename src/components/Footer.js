import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <footer className="py-8 border-t border-gray-400 flex flex-row flex justify-between align-middle w-full text-gray-300">
            <div className="">

                <FontAwesomeIcon icon={faFacebook} size="2x" className=" mr-3" />
                <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-3" />
                <FontAwesomeIcon icon={faMailBulk} size="2x" className="mr-3" />
            </div>
                <p className="mt-1">Copyright Vasilisa Beno 2021</p>            
        </footer>
    )
}

export default Footer
