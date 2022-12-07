import React, { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar'

const AdminAddExperience = () => {
    const [input, setInput] = useState({
        companyName: "",
        designation: "",
        start: "",
        end: "",
        description: "",
    })
    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    // date format


    // presentDate
    const presentDate = (e) => {
        if (e.target.checked) {
            setInput({
                ...input,
                end: "Present"
            })
        }
    }
    // get company
    const [company, setCompany] = useState([])
    const getCompany = async () => {
        try {
            const res = await fetch("/api/company")
            const data = await res.json()
            console.log(data);
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
    const addExperience = async (e) => {
        e.preventDefault()
        // 
        const { companyName, designation, start, end, description } = input
        const res = await fetch("/api/experience/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                companyName, designation, start, end, description
            })
        })
        const data = await res.json()
        console.log(data);
        window.alert(data.message)
        // 
        if (res.status === 200) {
            setInput({
                companyName: "",
                designation: "",
                start: "",
                end: "",
                description: "",
            })
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className="container glass my-5 py-4">
                <h2 className='mb-4'>Add experience</h2>
                <form className="row align-items-center justify-content-between">
                    <div className="col-md-6 mb-4">
                        <label>Company name</label>
                        <select name="companyName" value={input.companyName} onChange={handleInput} className="input glass">
                            <option></option>
                            {
                                company.map((item, index) => {
                                    return (
                                        <option value={item.name} key={index} className="text-black">{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label>Designation</label>
                        <input type="text" className="glass input" name="designation" value={input.designation} onChange={handleInput} placeholder='Designation' />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label>Start date</label>
                        <input type="date" className="glass input" name="start" value={input.start} onChange={handleInput} placeholder="dd-mm-yyyy" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='d-flex align-items-center justify-content-start gap-2'>
                            <label>End date</label>
                            <div className="d-flex align-items-center justify-content-start gap-2 ms-4">
                                <input type="checkbox" onClick={(e) => presentDate(e)} />
                                <p>I currently work here</p>
                            </div>
                        </div>
                        <input type="date" className="glass input" name="end" value={input.end} onChange={handleInput} placeholder="dd-mm-yyyy" />
                    </div>
                    <div className="col-12 mb-4">
                        <label>Description</label>
                        <textarea className="glass input" name="description" value={input.description} onChange={handleInput}></textarea>
                    </div>
                    <div className="col-12 text-end">
                        <button className="glass button" onClick={addExperience}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminAddExperience
