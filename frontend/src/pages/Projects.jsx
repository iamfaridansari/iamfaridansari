import React, { useEffect, useState } from 'react'
import Company from '../components/Company'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'

const Projects = () => {
    const [company, setCompany] = useState([])
    const [loading, setLoading] = useState(false)
    const getCompany = async () => {
        try {
            setLoading(true)
            const res = await fetch("/api/company")
            const data = await res.json()
            console.log(data);
            if (res.status === 200) {
                setCompany(data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        getCompany()
    }, [])
    return (
        <div className='container p-sm-0 p-2 py-0'>
            <Navbar />
            <div className="glass my-sm-4 my-2">
                <div className='container my-4'>
                    {
                        loading ? <Loading /> :
                            company.map((item, index) => {
                                return (
                                    <Company key={index} item={item} />
                                )
                            })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
