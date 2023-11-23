import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { filterI, filterItem } from "../actions/MenuActions";

export default function Filters() {
  const dispatch = useDispatch();
  const [searchkey,setsearch]=useState('');
  const [category,setcategory]=useState('');
  function callback(e){
    // if (searchkey!=='' ||searchkey){
    //   dispatch(filterItem(searchkey.toLowerCase()))
    // }
    // else{
    //   dispatch(filterI(category))
    // }
    setcategory(e.target.value);
    // console.log()
    dispatch(filterI(e.target.value))
  }
  return (
    <div style={{marginBottom:'20px'}} className="p-4 bg-light mt-4 ">
      <Form>
        <Row>
          <Col>
           <div style={{marginTop:'-11px'}}>
           <Form.Control value={searchkey} onChange={e=>setsearch(e.target.value)} placeholder="search" />
           </div>
          </Col>
          <Col>
            <Form.Select value={category} aria-label="Default select example" onChange={(e)=>{callback(e)}}>
              <option>all</option>
              <option>beverages</option>
              <option>cake</option>
              <option>combo pack</option>
              <option>coffee</option>
              <option>fries</option>
              <option>maggie</option>
              <option>milkshake</option>
              <option>nonveg pizza</option>
              <option>nonveg burger</option>
              <option>nonveg rice</option>
              <option>nonveg sandwich</option>
              <option>nonveg roll</option>
              <option>nuggets</option>
              <option>veg burger</option>
              <option>veg pizza</option>
              <option>veg noodles</option>
              <option>veg rice</option>
              <option>veg roll</option>
              <option>veg sandwich</option>
              <option>soup</option>
              <option>starters</option>
            </Form.Select>
          </Col>
          <Col>
          <Button onClick={()=>{dispatch(filterItem(searchkey.toLowerCase()))}}>search</Button>
   
          </Col>
        </Row>
      </Form>
      
    </div>
  );
}
