import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { filterI, filterItem } from "../actions/MenuActions";

export default function Filters() {
  const dispatch = useDispatch();
  const [searchkey,setsearch]=useState('');
  const [category,setcategory]=useState('');
  
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
            <Form.Select value={category} aria-label="Default select example" onChange={e=>setcategory(e.target.value)}>
              <option>all</option>
              <option>beverages</option>
              <option>cake</option>
              <option>combo pack</option>
              <option>coffee</option>
              <option>fries</option>
              <option>maggie</option>
              <option>milkshake</option>
              <option>nonveg pizza</option>
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
          <Button onClick={()=>{dispatch(filterI(category))}}>filter</Button>
          </Col>
        </Row>
      </Form>
      
    </div>
  );
}
