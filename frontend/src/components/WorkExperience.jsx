import React, { useState, useEffect } from 'react'
import work_experience from '../data/work_experience'
import Loading from './Loading'

const WorkExperience = () => {
    const [experience, setExperience] = useState([])
    const [loading, setLoading] = useState(false)
    const getExperience = async () => {
        try {
            setLoading(true)
            const res = await fetch("/api/experience")
            const data = await res.json()
            console.log(data);
            if (res.status === 200) {
                setExperience(data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        getExperience()
    }, [])
    return (
        <div className="glass p-sm-4 p-2 mt-sm-4 mt-2">
            <h2 className='title mb-2'>Work experience</h2>
            {
                loading ? <Loading /> :


                    <ul className='ms-sm-5 ms-4'>
                        {
                            experience.reverse().map((item, index) => {
                                return (
                                    <li className={index === work_experience.length ? "" : "mb-4"} key={index}>
                                        <div className='d-flex align-items-start justify-content-between flex-sm-row flex-column mb-2'>
                                            <div>
                                                <span>{item.companyName}</span> <br />
                                                <span>{item.designation}</span>
                                            </div>
                                            <span className="duration">{item.start} - {item.end}</span>
                                        </div>
                                        <p>{item.description}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default WorkExperience
