import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'

const AdminLogin = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    })
    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    // 
    const login = async (e) => {
        e.preventDefault()
        const { username, password } = input
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, password
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
                localStorage.setItem("iamfaridansari_token", JSON.stringify(data.token))
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className='container my-5 p-2'>
                <div className="row align-items-start justify-content-center m-0">
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
                            <div className="text-center">
                                <button className="glass button" onClick={login}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin
