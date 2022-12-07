import React from 'react'
import profile_pic from "../assets/image/my profile picture.JPG"
import resume from "../assets/resume/Farid Ansari resume.pdf"

const Introduction = () => {
    return (
        <div className="glass p-sm-4 p-2 mt-sm-4 mt-2">
            <div className="row align-items-center justify-content-md-between justify-content-center gap-md-0 gap-5">
                <div className="col-md-6">
                    <h2>Hello,</h2>
                    <div>
                        <h2>I'm Farid Ansari,<br /> a ReactJS developer.</h2>
                    </div>
                    <p className='my-4'>One and a half years of experience in developing user interface , frontend of web applications and websites.</p>
                    <a download="Farid Ansari resume" href={resume} className="glass button">Download resume</a>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-8 col-10">
                    <div className="profile_pic">
                        <img src={profile_pic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
