import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import { ButtonGroup, Button } from "react-bootstrap";
import { Route, BrowserRouter, Routes, Navigate ,NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div >
      <h4 className="bg-dark text-light p-2" style={{width:'500px'}}>Admin panel</h4>
      <Container>
        <Row>
          <Col md={4}>
            <ButtonGroup horizontal="true">
              <Button>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/admin/itemlist"
                >
                  All Item
                </NavLink>
              </Button>
              <Button>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/admin/addnewitem"
                >
                  AddNewItem
                </NavLink>
              </Button>
              <Button>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/admin/orderlist"
                >
                  Orderlist
                </NavLink>
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </div>
  );
};
export default AdminScreen;
