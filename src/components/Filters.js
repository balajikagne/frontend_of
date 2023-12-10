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
  function scall(e){
    dispatch(filterI(e))
  }
  return (
    <>
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
              <option>nonveg burger</option>
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
   
          </Col>
        </Row>
      </Form>
      
    </div>
 <div style={{width:'100%',marginBottom:'20px'}}>
        <div className="scrollitems" style={{display:'flex',width:'100%',overflow:'scroll',overflowY:'hidden',marginBottom:'20px'}}>
        <div style={{height:'100px',width:'100px',cursor:'pointer',textAlign:'center'}} onClick={(e)=>{scall('all')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'id="sitem"></img><h2 className='tname'>All Menus</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('veg burger')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg' id="sitem"></img><h2 className='tname'>Veg Burger</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('nonveg burger')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg' id="sitem"></img><h2 className='tname'>N-Veg Burger</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('veg pizza')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1341905556/photo/chinese-food-veg-pizza.jpg?s=612x612&w=0&k=20&c=v8fOYCmKapktf_tzg2wKx1I-sLD8ZyUhnMo1N_AsVEQ=' id="sitem"></img><h2 className='tname'>Veg Pizza</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('nonveg pizza')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/186295807/photo/chicken-tikka-pizza.jpg?s=612x612&w=0&k=20&c=gnF-DKlj1JCCAhzQ4fB8WEyJ_cUlgl1i-ZNsIuvZ54U=' id="sitem"></img><h2 className='tname'>N-Veg Pizza</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('beverages')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='logo1.png' id="sitem"></img><h2 className='tname'>Beverages</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('cake')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1319549646/photo/happy-birthday-chocolate-cake-with-cherry.jpg?s=612x612&w=0&k=20&c=U6PwDMCH-622xo31ZSXZQJ0ZSJOzQpBb2J45JbiV11I=' id="sitem"></img><h2 className='tname'>Cake</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('veg rice')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1292617507/photo/tasty-veg-schezwan-fried-rice-served-in-bowl-over-a-rustic-wooden-background-indian-cuisine.jpg?s=612x612&w=0&k=20&c=MlfiFWbcPDUj2wnjtxoHBxSUrRrKb9c1OR8rS9H4goc=' id="sitem"></img><h2 className='tname'>Veg Rice</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('nonveg rice')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/644021564/photo/jollof-rice-with-chicken-and-fried-plantain-west-african-cuisine.jpg?s=612x612&w=0&k=20&c=T9QnCp1TPNyxcmD0Qk6FtCjCIs9a6Jpz6EEFCgqouSo=' id="sitem"></img><h2 className='tname'>N-Veg Rice</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('veg sandwich')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1367549564/photo/sandwich-isolated-on-white-background-gourmet-toast-or-sandwich-with-veg-petty-lettuce-tomato.jpg?s=612x612&w=0&k=20&c=1sbBA8c7yMizs-KKJt0OTyy7sSqFk2pYxZdmx-GnkeU=' id="sitem"></img><h2 className='tname'>V-Sandwich</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('nonveg sandwich')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1300550738/photo/chicken-sandwiches.jpg?s=612x612&w=0&k=20&c=dHQShf7a7y9nHWJWpRqu3AIuwIAdUg_UWYUts89NYhM=' id="sitem"></img><h2 className='tname'>N-Sandwich</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('starters')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/543179148/photo/spicy-scrambled-eggs-or-egg-bhurji-or-anda-bhurji.webp?b=1&s=170667a&w=0&k=20&c=ZBT3tnUfULyXmOeui7YsZNU60Y8f_Vhi-BG8jLCeYGA=' id="sitem"></img><h2 className='tname'>Starter</h2></a></div>
        </div>
        <div className="scrollitems" style={{display:'flex',width:'100%',overflow:'scroll',overflowY:'hidden'}}>
        <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('veg noodles')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1292637257/photo/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-vegetables-served-over-a.jpg?s=612x612&w=0&k=20&c=ckgGtleqsGxEMEW0ZlOR9eM8ii_R3A1apAMo8xa2Cr4=' id="sitem"></img><h2>Veg Noodles</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('nonveg noodles')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1459152165/photo/spicy-chilli-mao-xiang-big-fish-head-with-fish-pork-bean-pork-with-potato-flour-served-dish.jpg?s=612x612&w=0&k=20&c=hGU6PE0Cht0goYeYYy5zxOkfcfvJOrzlrhPFtTO_iAM=' id="sitem"></img><h2>N-Veg Noodles</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('veg roll')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1400256468/photo/mix-vegetable-kathi-roll.jpg?s=612x612&w=0&k=20&c=ZH9fbHJaKkYjzFvl1hTnsl5wdx35pFnBLTKBonBZLw0=' id="sitem"></img><h2>Veg Roll</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('nonveg roll')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1438449132/photo/egg-cheese-chicken-burger-shawarma-wrap-with-salad-dip-and-sauce-isolated-wooden-board-side.jpg?s=612x612&w=0&k=20&c=o34qlfaytv5yfsxdmaWNdU6u524cGl3NXn-X5fjAFdY=' id="sitem"></img><h2>Veg Roll</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('nuggets')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1154557976/photo/chicken-nuggets-with-ketchup-popular-american-fast-food-snack-quick-bites-appetizer.jpg?s=612x612&w=0&k=20&c=OElI-vGekjFgmynegkwG-rn3rfrDUEy5IssqnshL0PY=' id="sitem"></img><h2>Nuggets</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('milkshake')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/174956542/photo/non-alcoholic-strawberry-milkshake-cocktail-on-the-classic-black-bar-table.jpg?s=612x612&w=0&k=20&c=WGfVYxkzV3hxsA7C9GHprft39KU5Vn_LYN80rlkCf9I=' id="sitem"></img><h2>Milkshaker</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('maggie')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1292638282/photo/maggie-noodles-instant-noodles-served-in-a-bowl-over-a-rustic-wooden-background-selective.jpg?s=612x612&w=0&k=20&c=7HjVH0Y2HuycpQtjezRdLYKF6BkaEaE_wVO0IqC2uKo=' id="sitem"></img><h2>Maggie</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('coffee')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/867813076/photo/cold-coffee-shake.jpg?s=612x612&w=0&k=20&c=lkdYRGQWogU8ezhdlhAX--z6VW1yEkxeugFJ6q5v-gE=' id="sitem"></img><h2>Starter</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('fries')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' id="sitem"></img><h2>Starter</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('combo pack')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/1196317163/photo/delicious-fresh-and-tasty-flat-bread-italian-pepperoni-or-margherita-pizza-view-of-salami.jpg?s=612x612&w=0&k=20&c=oSm5WTc6nY76Y1QQMiq3BPRs7JAeG7S-mY2qTQ_lW8k=' id="sitem"></img><h2>coffee</h2></a></div>
          <div style={{height:'100px',width:'100px',cursor:'pointer'}} onClick={(e)=>{scall('soup')}}><a style={{textDecoration:'none',color:'black'}} href="#itemloc"><img src='https://media.istockphoto.com/id/579739258/photo/lemon-coriander-soup.jpg?s=612x612&w=0&k=20&c=816iYZig2GJUKwchjx9i563IZy3c8gemq9uD8N6G9nU=' id="sitem"></img><h2>Starter</h2></a></div>
        </div>
      </div>
  </>
  );
}
