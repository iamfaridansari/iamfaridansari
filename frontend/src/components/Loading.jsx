import React from 'react'

const Loading = () => {
    return (
        // <div className='d-flex align-items-center justify-content-start gap-2 my-2'>
        //     <div className="spinner-grow spinner-grow-sm text-white" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        //     <div className="spinner-grow spinner-grow-sm text-white" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        //     <div className="spinner-grow spinner-grow-sm text-white" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        // </div>
        <>
            <div className="loading">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>
        </>
    )
}

export default Loading
