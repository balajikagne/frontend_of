// import React from 'react'
// import {NavLink} from 'react-router-dom';
// import { Row,Col,Container} from 'react-bootstrap'
// import {ButtonGroup,Button} from 'react-bootstrap';
// import { loginUserReducer } from "../Reducers/UserReducer";
// import { useEffect } from "react";
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import Loading from "../components/Loading";
// import Error from "../components/Error";
// import Success from "../components/Success";
// export default function Userlist() {
//     const userState = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userState;
//   useEffect(() => {
//     if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
//       window.location.href = "/";
//     }
//   }, []);
//   return (
//     <div style={{backgroundColor:'blue'}}>
//        <div>
//            <h4 className='bg-dark text-light p-2'>Admin panel</h4>
//       <Container>
//       <Row>
     
//         <Col md={4}>
//         <ButtonGroup horizontal>
//       <Button><NavLink style={{textDecoration:'none'}} to='/admin/userlist'>All Users</NavLink></Button>
//       <Button><NavLink style={{textDecoration:'none'}} to='/admin/itemlist'>All Order</NavLink></Button>
//       <Button><NavLink style={{textDecoration:'none'}} to='/admin/addnewitem'>AddNewItem</NavLink></Button>
//       <Button><NavLink style={{textDecoration:'none'}} to='/admin/orderlist'>Orderlist</NavLink></Button>
//     </ButtonGroup>
//         </Col>
//         <Col md={8}>
//         </Col>
//       </Row>
//       </Container>
//     </div>
//     </div>
//   )
// }
