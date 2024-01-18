import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllitems_new } from '../actions/MenuActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import NotifyMap from '../components/NotifyMap'

function NotifyScreen() {
    const dispatch=useDispatch()
    
    const notification=useSelector(notify=>notify.setAllitemsReducer)
    const { items, error, loading }=notification;
    console.log(notification,"heh")
    useEffect(()=>{
      dispatch(getAllitems_new())
  },[])
  return (
    <>
    {loading ? (
        <Loading/>
      ) : error ? (
        <Error error='something went wrong'/>
      ) : (
        items.map((notifyME) => {
          return (
            <div key={notifyME._id}><NotifyMap notifyME={notifyME}/><hr></hr></div>
          );
        })
      )}
    </>
  )
}

export default NotifyScreen
