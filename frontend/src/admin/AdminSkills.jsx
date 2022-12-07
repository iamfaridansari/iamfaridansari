import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPen, FaTrash } from "react-icons/fa"
import AdminNavbar from './AdminNavbar'

const AdminSkills = () => {
    const [skills, setSkills] = useState([])
    const getSkills = async () => {
        try {
            const res = await fetch("/api/skills")
            const data = await res.json()
            console.log(data);
            // 
            if (res.status === 200) {
                setSkills(data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSkills()
    }, [])

    // delete skill
    const deleteSkill = async (id) => {
        const confirmDelete = window.confirm("Confirm delete?")
        if (confirmDelete) {
            try {
                const res = await fetch("/api/skill/delete", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify({
                        id: id
                    })
                })
                const data = await res.json()
                console.log(data);
                if (res.status === 200) {
                    window.alert(data.message)
                }
                getSkills()
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className="container my-5">
                <div className="text-end mb-4">
                    <Link to="/addskills" className='glass button'>Add Skill</Link>
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
                                skills.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <div className="btn-group gap-2">
                                                    <button className="glass button text-danger" onClick={() => deleteSkill(item._id)}><FaTrash /></button>
                                                    <Link to={`/skills/${item._id}`} className="glass button text-warning"><FaPen /></Link>
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

export default AdminSkills
