import React from 'react'
import { FaEnvelope, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="container p-2 mb-sm-4 mb-2 glass">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                    <p className='text-white'>&copy; Farid Ansari</p>
                </div>

                <ul className='list-unstyled d-flex align-content-center justify-content-between gap-4 social_media'>
                    <li>
                        <a href="mailto:iamfaridansari@gmail.com">
                            <FaEnvelope />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/iamfaridansari/">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
