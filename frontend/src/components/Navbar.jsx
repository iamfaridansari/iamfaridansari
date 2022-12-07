import React, { useRef } from 'react'
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navbar = useRef(null)
    const toggle_navbar = () => {
        navbar.current.classList.toggle("active")
    }
    // close menu
    const close_menu = () => {
        window.scrollTo(0, 0)
        navbar.current.classList.remove("active")
    }
    return (
        <nav className="navbar1 container glass mt-sm-4 mt-2 p-2" ref={navbar}>
            <div className="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/"><h2 className='text-white'>Farid Ansari</h2></Link>

                    <div className='d-flex align-items-center justify-content-between gap-4'>
                        <div className='d-sm-none d-block' onClick={toggle_navbar}>
                            <FaBars className='pointer text-white' />
                        </div>
                    </div>
                </div>
                <ul className='d-flex align-items-start justify-content-between gap-sm-4 gap-2 flex-sm-row flex-column mt-sm-0 mt-2 list-unstyled'>
                    <li onClick={close_menu}><Link to="/">Home</Link></li>
                    <li onClick={close_menu}><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
