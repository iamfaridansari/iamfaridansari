import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const Skills = () => {
    // get skills
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(false)
    const getSkills = async () => {
        try {
            setLoading(true)
            const res = await fetch("/api/skills")
            const data = await res.json()
            console.log(data);
            // 
            if (res.status === 200) {
                setSkills(data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        getSkills()
    }, [])
    return (
        <div className='glass p-sm-4 p-2 mt-sm-4 mt-2'>
            <h2 className='title mb-2'>Skills</h2>
            <div className="d-flex align-items-center justify-content-start gap-2 flex-wrap">
                {
                    loading ? <Loading /> :
                        skills.map((item, index) => {
                            return (
                                <div className="py-2 px-3 rounded shadow glass" key={index}>
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Skills
