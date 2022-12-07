import React from 'react'
import education from '../data/education'

const Education = () => {
    return (
        <div className='glass p-sm-4 p-2 my-sm-4 my-2'>
            <h2 className='title mb-2'>Education</h2>

            <ul className='ms-sm-5 ms-4'>
                {
                    education.map((item, index) => {
                        return (
                            <li className={index === education.length - 1 ? "" : "mb-4"} key={index}>
                                <div className='d-flex align-items-start justify-content-between flex-sm-row flex-column'>
                                    <span>{item.institute}</span>
                                    <span className="duration">{item.start} - {item.end}</span>
                                </div>
                                <div>
                                    <span>{item.board}</span>
                                </div>
                                <p>Result: {item.result}{item.type === "percent" ? "%" : " CGPA"}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Education
