import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
export default function Menus({menu}) {
    const [varient,setVarient]=useState("half");
    const [quantity,setQuantity]=useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()
    function addtocart()
    {
      dispatch(addToCart(menu,quantity,varient,menu.country))
      // console.log()
    }
  return (
    <div className='shadow p-3 mb-5 bg-white rounded childc'>
        
    <div onClick={handleShow}>
      <h1><b>{menu.name}</b></h1>
      <img src={menu.img} className='img-fluid' style={{height:'70px',width:'120px'}}></img>
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
            <p>Varients:</p>
            <select className='form-control' value={varient} onChange={(e)=>{setVarient(e.target.value)}}style={{marginTop:'-20px'}}>
                {menu.varients.map((varient)=>{
                    return <option value={varient}>{varient}</option>
                })}
            </select>
        </div>
        <div className='w-100 m-1'>
            <p>Quantity:</p>
            <select className='form-control' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} style={{marginTop:'-20px'}}>
                {[...Array(10).keys()].map((x ,i)=>{
                    return <option value={i+1}>{i+1}</option>
                })}
            </select>
        </div>
      </div>
      <div className='flex-container'>
            <div className='m-1 w-100'>
                <h2 className='pbtn'>price: {menu.prices[0][varient]*quantity} Rs</h2>
            </div>
            <div className='m-1 w-100'>
                <button className='btn' onClick={addtocart}>
                    Cart
                </button>
            </div>
        </div>




      <Modal show={show}>
        <Modal.Header >
          <Modal.Title>{menu.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <img src={menu.img} style={{height:'100px', width:'130px' }}></img>
          <p>{menu.dsc}</p>
        </Modal.Body>

        <Modal.Footer>
         <button className='btn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
   
      </div>
    
  )
}
