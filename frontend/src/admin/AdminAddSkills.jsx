import React, { useState, useRef } from 'react'
import AdminNavbar from './AdminNavbar'

const AdminAddSkills = () => {
  const [name, setName] = useState("")
  const addSkill = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/skill/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name
        })
      })
      const data = await res.json()
      console.log(data);
      // 
      if (res.status === 200) {
        setName("")
        window.alert(data.message)
        checkboxes.current.forEach((item) => {
          item.checked = false
        })
      } else {
        window.alert(data.message)
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
      <div className='container glass my-5 pb-4'>
        <h2 className='my-4'>Add a skill</h2>
        <form className='d-flex align-items-center justify-content between gap-2'>
          <input type="text" className="glass input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Add skill name' />
          <button className="glass button" onClick={addSkill}>Add</button>
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

export default AdminAddSkills
