import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminNavbar from './AdminNavbar'

const AdminAddCompany = () => {
    const [name, setName] = useState("")
    const [toggleID, setToggleID] = useState("")
    const addCompany = async (e) => {
        e.preventDefault()
        // 
        try {
            const res = await fetch("/api/company/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, toggleID
                })
            })
            const data = await res.json()
            console.log(data);
            // 
            if (res.status === 200) {
                setName("")
                window.alert("Company added")
            }
        } catch (error) {
            console.log(error);
        }
    }
    // 
    useEffect(() => {
        setToggleID(name.replace(/\s/g, "").toLowerCase())
    }, [name])
    return (
        <>
            <AdminNavbar />
            <div className='container glass py-4 my-5'>
                <h2 className="mb-4">Add a company</h2>
                <form className="d-flex align-items-center justify-content-between gap-2">
                    <input type="text" className="glass input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Company name' />
                    <button className="glass button" onClick={addCompany}>Add</button>
                </form>
            </div>
        </>
    )
}

export default AdminAddCompany
