import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <footer className="py-8 border-t border-gray-400 flex
        flex-col
        justify-between align-middle w-full text-gray-300">
            <div className="flex flex-row justify-evenly">

                <FontAwesomeIcon icon={faFacebook} size="2x" className=" mr-3" />
                <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-3" />
                <FontAwesomeIcon icon={faMailBulk} size="2x" className="mr-3" />
            </div>
                <div className="mt-1 flex my-8 flex-1 flex-col justify-items-center items-center">
                    Copyright Vasilisa Beno 2021
                    </div>            
        </footer>
    )
}

export default Footer
