import React from 'react'
import './info.css'

const Info = () => {
  return (
    <div className='info_container'>
            {/* Title */}
            <div className="info_title_container">
                <h1>#Infomation</h1>
                <div className="info_title_bg" style={{ backgroundImage: "url(/my-movie-app/images/info/info_title_bg_img.png)" }}></div>
            </div>
        </div>
  )
}

export default Info
