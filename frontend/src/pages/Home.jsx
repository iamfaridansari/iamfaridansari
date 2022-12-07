import React from 'react'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home = () => {
    return (
        <>
            <div className="container p-sm-0 p-2 py-0">
                <Navbar />
                <Introduction />
                <WorkExperience />
                <Skills />
                <Education />
                <Footer />
            </div>
        </>
    )
}

export default Home
