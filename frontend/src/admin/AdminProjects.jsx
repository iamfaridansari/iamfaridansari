import React, { useState, useEffect } from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminProjects = () => {
    const [company, setCompany] = useState([])
    const [projects, setProjects] = useState([])
    const getCompany = async () => {
        try {
            const res = await fetch("/api/company")
            const data = await res.json()
            if (res.status === 200) {
                setCompany(data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCompany()
    }, [])
    // 
    useEffect(() => {
        if (company) {
            const projectList = []
            company.forEach((comp) => {
                comp.projects.map((item) => {
                    projectList.push(item)
                })
            })
            setProjects(projectList);
        }
    }, [company])
    return (
        <>
            <AdminNavbar />
            <div className='container my-5'>
                <div className="text-end mb-4">
                    <Link to="/addprojects" className='glass button'>Add project</Link>
                </div>
                <div className="table-container">
                    <table className="table glass">
                        <thead>
                            <tr>
                                <th>Sr no</th>
                                <th>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.projectName}</td>
                                            <td>
                                                <div className="btn-group gap-2">
                                                    <button className="glass button text-danger"><FaTrash /></button>
                                                    <Link to={`/adminprojects/:${item._id}`} className="glass button text-warning"><FaPen /></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminProjects
