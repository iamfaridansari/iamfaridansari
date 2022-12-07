import React, { useState, useEffect } from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminCompany = () => {
    const [company, setCompany] = useState([])
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
    // delete company
    const deletecompany = async (id) => {
        // const confirmDelete = window.confirm("Confirm delete?")
        // if (confirmDelete) {

        // }
        const confirmDelete = window.confirm("Confirm delete?")
        if (confirmDelete) {
            try {
                const res = await fetch("/api/company/delete", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: id
                    })
                })
                const data = await res.json()
                console.log(data);
                if (res.status === 200) {
                    window.alert(data.message)
                    getCompany()
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
                    <Link to="/addcompany" className='glass button'>Add company</Link>
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
                                company.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <div className="btn-group gap-2">
                                                    <button className="glass button text-danger" onClick={() => deletecompany(item._id)}><FaTrash /></button>
                                                    <Link to={`/company/${item._id}`} className="glass button text-warning"><FaPen /></Link>
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

export default AdminCompany
