import React, { useRef, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Company = ({ item }) => {
    const arrow = useRef(null)
    const company = useRef(null)
    const toggleCollapse = () => {
        arrow.current.classList.toggle("active")
        company.current.classList.toggle("active")
    }
    // 
    useEffect(() => {

    }, [])
    return (
        <div className="glass rounded overflow-hidden mb-4">
            <div className="d-flex align-items-center justify-content-between p-2 company" ref={company} onClick={toggleCollapse} data-bs-toggle="collapse" href={`#${item.toggleID}`} role="button" aria-expanded="false" aria-controls={item.toggleID}>
                <p className='text-white text-capitalize'>{item.name}</p>
                <div className='arrow' ref={arrow}>
                    <FaChevronDown className='text-white' />
                </div>
            </div>
            <ul className="collapse" id={item.toggleID}>
                {
                    item.projects.length === 0 ? <p className='p-2'>No projects to show</p> :
                        item.projects.map((project, index) => {
                            return (
                                <li className="p-2" key={index}>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="d-block text-capitalize">{project.projectName}</a>
                                </li>
                            )
                        })
                }
            </ul>
        </div>
    )
}

export default Company
