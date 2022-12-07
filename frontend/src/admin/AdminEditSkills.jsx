import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminEditSkills = () => {
    const [name, setName] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()
    const getSkill = async () => {
        try {
            const res = await fetch(`/ali/skill/view/${id}`)
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
        getSkill()
    }, [])
    // 
    const editSkill = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`/api/skill/edit/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name
                })
            })
            const data = await res.json()
            console.log(data);
            // 
            if (res.status === 200) {
                window.alert(data.message)
                navigate("/skills", { replace: true })
            }
        } catch (error) {
            console.log(error);
        }
    }
    // uppercase
    const uppercase = () => {
        setName(name.toUpperCase())
    }
    // capitalize
    const capitalize = () => {
        const firstChar = name.charAt(0)
        setName(firstChar.toUpperCase() + name.slice(1))
    }
    // jscase
    const jscase = () => {
        const firstChar = name.charAt(0).toUpperCase()
        setName(firstChar.toUpperCase() + name.slice(1))
        // 
        const j = name.charAt(name.length - 2).toUpperCase()
        const s = name.charAt(name.length - 1).toUpperCase()
        // 
        setName(firstChar + name.slice(1, name.length - 2) + j + s)
    }
    // lowercase
    const lowercase = () => {
        setName(name.toLowerCase())
    }
    // 
    const checkboxes = useRef([])
    checkboxes.current = []
    const addCheckBoxes = (item) => {
        if (item && !checkboxes.current.includes(item)) {
            checkboxes.current.push(item)
        }
    }
    // 
    return (
        <>
            <AdminNavbar />
            <div className='container glass my-5 py-4'>
                <h2 className='my-4'>Edit skill</h2>
                <form className='d-flex align-items-center justify-content between gap-2'>
                    <input type="text" className="input glass" value={name} onChange={(e) => setName(e.target.value)} placeholder='Add skill name' />
                    <button className="button glass" onClick={editSkill}>Save</button>
                </form>
                <div className="d-flex align-items-center justify-content between gap-5 mt-2">
                    <div>
                        <label htmlFor='case'>
                            <input type="radio" name="case" className='me-2' onClick={uppercase} ref={addCheckBoxes} />
                            Uppercase
                        </label>
                    </div>
                    <div>
                        <label htmlFor='case'>
                            <input type="radio" name="case" className='me-2' onClick={lowercase} ref={addCheckBoxes} />
                            Lowercase
                        </label>
                    </div>
                    <div>
                        <label htmlFor='case'>
                            <input type="radio" name="case" className='me-2' onClick={capitalize} ref={addCheckBoxes} />
                            Capitalize
                        </label>
                    </div>
                    <div>
                        <label htmlFor='case'>
                            <input type="radio" name="case" className='me-2' onClick={jscase} ref={addCheckBoxes} />
                            JS case
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminEditSkills
