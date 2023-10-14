import React, { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { ButtonGroup, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { addItems } from "../actions/MenuActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import { loginUserReducer } from "../Reducers/UserReducer";
export default function AddNewItem() {
  const [name, setname] = useState("");
  const [halfprice, sethalfprice] = useState("");
  const [fullprice, setfullprice] = useState("");
  const [img, setimgitem] = useState("");
  const [rate, setrate] = useState("");
  const dispatch = useDispatch();
  const additemstate = useSelector((state) => state.AdditemsReducer);
  const { loading, error, success } = additemstate;
  const submitform = (e) => {
    // e.priventDefault;
    console.log(e);
    const item = {
      name,
      img,
      prices: { half: halfprice, full: fullprice },
      rate,
    };
    // console.log(item);
    dispatch(addItems(item));
  };
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="item added successfully" />}
      <h4 className="bg-dark text-light p-2">Admin panel</h4>
      <Container>
        <Row>
          <Col md={4}>
            <ButtonGroup horizontal="true">
              {/* <Button>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/admin/userlist"
                >
                  All Users
                </NavLink>
              </Button> */}
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

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridnae">
            <Form.Label>Item name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Item Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Half price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter half price"
              value={halfprice}
              onChange={(e) => sethalfprice(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Full price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full price"
            value={fullprice}
            onChange={(e) => setfullprice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Add images Here</Form.Label>
          <Form.Control
            placeholder="Add Image URL"
            value={img}
            onChange={(e) => setimgitem(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>tokenNo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tokenNo"
            value={rate}
            onChange={(e) => setrate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" onClick={submitform}>
          Add New Items
        </Button>
      </Form>
    </div>
  );
}
