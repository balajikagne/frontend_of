import React from 'react'

function NotifyMap({notifyME}) {
  return (
    <div>
      <div className='outnoti'>
        <div className='img-notify'>
            <img src={notifyME.img}></img>
        </div>
        <div className='des-notify'>
            <h2>{notifyME.headline}</h2>
            <br></br>
            <p>{notifyME.paragraph}</p>
        </div>
        
    </div>
    </div>
  )
}

export default NotifyMap
