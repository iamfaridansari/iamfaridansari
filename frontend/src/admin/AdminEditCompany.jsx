import React, { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar'
import { useParams, useNavigate } from 'react-router-dom'

const AdminEditCompany = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    // 
    const [name, setName] = useState("")
    const [toggleID, setToggleID] = useState("")
    // get individual company
    const getCompany = async () => {
        try {
            const res = await fetch(`/api/company/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application"
                }, body: JSON.stringify({
                    id: id
                })
            })
            const data = await res.json()
            console.log(data);
            // 
            if (res.status === 200) {
                setName(data.name)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCompany()
    }, [])
    useEffect(() => {
        setToggleID(name.replace(/\s/g, "").toLowerCase())
    }, [name])
    // update company
    const editCompany = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`/api/editcompany/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({
                    name, toggleID
                })
            })
            const data = await res.json()
            console.log(data);
            // 
            if (res.status === 200) {
                window.alert(data.message)
                navigate("/company", { replace: true })
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className='container glass py-4 my-5'>
                <h2 className="mb-4">Edit company</h2>
                <form className="d-flex align-items-center justify-content-between gap-2">
                    <input type="text" className="glass input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Company name' />
                    <button className="glass button" onClick={editCompany}>Save</button>
                </form>
            </div>
        </>
    )
}

export default AdminEditCompany
