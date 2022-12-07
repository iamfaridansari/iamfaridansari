import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminSignup = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
        secretkey: "",
    })
    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    // 
    const signup = async (e) => {
        e.preventDefault()
        // 
        const { username, password, secretkey } = input
        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, password, secretkey
                })
            })
            const data = await res.json()
            console.log(data);
            window.alert(data.message)
            // 
            if (res.status === 200) {
                setInput({
                    username: "",
                    password: "",
                    secretkey: "",
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className='container my-5'>
                <div className="row align-items-start justify-content-center">
                    <div className="col-lg-6 col-md-8 glass py-4">
                        <form>
                            <div className="form-group mb-4">
                                <label className="form-label">Username</label>
                                <input type="text" name='username' value={input.username} onChange={handleInput} className="glass input" />
                            </div>
                            <div className="form-group mb-4">
                                <label className="form-label">Password</label>
                                <input type="password" name='password' value={input.password} onChange={handleInput} className="glass input" />
                            </div>
                            <div className="form-group mb-4">
                                <label className="form-label">Secret key</label>
                                <input type="password" name='secretkey' value={input.secretkey} onChange={handleInput} className="glass input" />
                            </div>
                            <div className="text-center">
                                <button className="glass button" onClick={signup}>Sign up</button>
                            </div>
                        </form>
                        <hr />
                        <div className="text-center">
                            <h2 className='mb-4'>Already have an acount?</h2>
                            <Link to="/login" className='button glass'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSignup
