// import React, { useEffect } from "react";
// import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getItemById } from "../actions/MenuActions";
// export default function EditeItem({ match }) {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getItemById(match.itemid));
//   }, [dispatch]);
//   return (
//     <div>
//       <div>
//         <h4 className="bg-dark text-light p-2">Admin panel</h4>
//         <Container>
//           <Row>
//             <Col md={4}>
//               <ButtonGroup horizontal>
//                 <Button>
//                   <NavLink
//                     style={{ textDecoration: "none" }}
//                     to="/admin/userlist"
//                   >
//                     All Users
//                   </NavLink>
//                 </Button>
//                 <Button>
//                   <NavLink
//                     style={{ textDecoration: "none" }}
//                     to="/admin/itemlist"
//                   >
//                     All Order
//                   </NavLink>
//                 </Button>
//                 <Button>
//                   <NavLink
//                     style={{ textDecoration: "none" }}
//                     to="/admin/addnewitem"
//                   >
//                     AddNewItem
//                   </NavLink>
//                 </Button>
//                 <Button>
//                   <NavLink
//                     style={{ textDecoration: "none" }}
//                     to="/admin/orderlist"
//                   >
//                     Orderlist
//                   </NavLink>
//                 </Button>
//               </ButtonGroup>
//             </Col>
//             <Col md={8}></Col>
//           </Row>
//         </Container>
//       </div>
//       <h1>Edit pizza</h1>
//     </div>
//   );
// }
