import React, { useState, useEffect } from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminExperience = () => {
    const [experience, setExperience] = useState([])
    const getExperience = async () => {
        const res = await fetch("/api/experience")
        const data = await res.json()
        console.log(data);
        if (res.status === 200) {
            setExperience(data)
        }
    }
    useEffect(() => {
        getExperience()
    }, [])
    // delete experience
    const deleteExperience = async (id) => {
        const confirmDelete = window.confirm("Confirm delete?")
        if (confirmDelete) {
            try {
                const res = await fetch("/api/experience/delete", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: id
                    })
                    // 
                })
                const data = await res.json()
                if (res.status === 200) {
                    window.alert(data.message)
                    getExperience()
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className='container my-5'>
                <div className="text-end mb-4">
                    <Link to="/addexperience" className='glass button'>Add Experience</Link>
                </div>
                <div className="table-container">
                    <table className="table glass">
                        <thead>
                            <tr>
                                <th>Sr no</th>
                                <th>Company name</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                experience.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.companyName}</td>
                                            <td>
                                                <p>{item.start}</p>
                                                <p>{item.end}</p>
                                            </td>
                                            <td>
                                                <div className="btn-group gap-2">
                                                    <button className="glass button text-danger" onClick={() => deleteExperience(item._id)}><FaTrash /></button>
                                                    <Link to={`/experience/${item._id}`} className="glass button text-warning"><FaPen /></Link>
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

export default AdminExperience
