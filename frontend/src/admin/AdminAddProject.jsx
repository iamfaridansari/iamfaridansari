import React, { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar'

const AdminAddProject = () => {
    const [input, setInput] = useState({
        companyName: "",
        projectName: "",
        link: "",
    })
    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    // get company
    const [company, setCompany] = useState([])
    const getCompany = async () => {
        try {
            const res = await fetch("/api/company")
            const data = await res.json()
            console.log(data);
            // 
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
    // add projects
    const addProject = async (e) => {
        e.preventDefault()
        // 
        const { companyName, projectName, link } = input
        try {
            const res = await fetch("/api/project/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    companyName, projectName, link
                })
            })
            const data = await res.json()
            console.log(data);
            window.alert(data.message)
            // 
            if (res.status === 200) {
                setInput({
                    companyName: "",
                    projectName: "",
                    link: "",
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className='container glass my-5 py-4'>
                <h2 className="mb-4">Add a new project</h2>
                <form className="row align-items-center justify-content-between">
                    <div className="col-12 mb-4">
                        <label>Company name</label>
                        <select name="companyName" value={input.companyName} onChange={handleInput} className="glass input">
                            <option></option>
                            {
                                company.map((item, index) => {
                                    return (
                                        <option value={item.name} className="text-black" key={index}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label>Project name</label>
                        <input type="text" name="projectName" value={input.projectName} onChange={handleInput} className="glass input" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label>Link</label>
                        <input type="text" name="link" value={input.link} onChange={handleInput} className="glass input" />
                    </div>
                    <div className="col-12 text-end">
                        <button className="glass button" onClick={addProject}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminAddProject
