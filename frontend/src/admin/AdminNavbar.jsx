import React, { useRef, useState } from 'react'
import { FaArrowLeft, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    const dashboard = useRef(null)
    const [dactive, setDactive] = useState(false)
    const toggle_dashboard = () => {
        setDactive(!dactive)
        dashboard.current.classList.toggle("active")
    }
    const close_menu = () => {
        window.scrollTo(0, 0)
        dashboard.current.classList.remove("active")
        setDactive(false)
    }
    return (
        <>
            <nav className='container-fluid p-2 glass navbar2'>
                <div className="d-flex align-items-center justify-content-between">
                    <div onClick={toggle_dashboard}>
                        {
                            dactive ?
                                <FaArrowLeft className='text-white pointer' /> :
                                <FaBars className='text-white pointer' />
                        }
                    </div>
                    <div>
                        <Link to="/admin">
                            <h2 className='text-white'>Farid Ansari</h2>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className='dashboard glass p-2 px-0 shadow shadow-lg' ref={dashboard}>
                <ul>
                    <li onClick={close_menu}><Link to="/company">Company</Link></li>
                    <li onClick={close_menu}><Link to="/experience">Experience</Link></li>
                    <li onClick={close_menu}><Link to="/skills">Skills</Link></li>
                    <li onClick={close_menu}><Link to="/adminprojects">Projects</Link></li>
                    <li onClick={close_menu}><Link to="/login">Login</Link></li>
                    <li onClick={close_menu}><Link to="/admin">Logout</Link></li>
                </ul>
            </div>
        </>
    )
}

export default AdminNavbar
