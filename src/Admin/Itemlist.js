import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { ButtonGroup, Button, Table } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menusa from "../components/Menus";
import { deleteItem, getAllitems } from "../actions/MenuActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { loginUserReducer } from "../Reducers/UserReducer";
import { StockIn, StockOut } from "../actions/OrderActions";

export default function Itemlist() {
  const dispatch = useDispatch();

  const itemstate = useSelector((state) => state.getAllitemsReducer);

  const { items, error, loading } = itemstate;

  useEffect(() => {
    dispatch(getAllitems());
  }, []);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <div>
        <h4 className="bg-dark text-light p-2">Admin panel</h4>
        <Container>
          <Row>
            <Col md={4}>
              <ButtonGroup horizontal className="center">
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

            <div className="democ">
              {loading ? (
                <Loading />
              ) : error ? (
                <Error error="something went wrong" />
              ) : (
                <div>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Item Name</th>
                        <th>in</th>
                        <th>Out</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items &&
                        items.map((item) => (
                          <tr>
                            <td>
                              <img
                                src={item.img}
                                alt="logo"
                                width={"100px"}
                                height={"100px"}
                              ></img>
                            </td>
                            <td style={{ width: "100px" }}>{item.name}</td>
                            <td style={{ width: "100px" }}>
                              {/* stock out */}
                              <h1>
                                {item.stock === true ? (
                                  <>
                                    <h6 className="text-success">stock in</h6>
                                  </>
                                ) : (
                                  <>
                                    <Button
                                      className="btn-danger"
                                      onClick={() => {
                                        dispatch(StockIn(item.name));
                                      }}
                                    >
                                      Stock-in
                                    </Button>
                                  </>
                                )}{" "}
                              </h1>
                            </td>
                            <td>
                              {/* <i
                                class="fa-solid fa-trash"
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={() => {
                                dispatch(deleteItem(item._id));
                                }}
                              ></i> */}

                              <h1>
                                {item.stock === false ? (
                                  <>
                                    <h6 className="text-success">stock out</h6>
                                  </>
                                ) : (
                                  <>
                                    <Button
                                      className="btn-danger"
                                      onClick={() => {
                                        dispatch(StockOut(item.name));
                                      }}
                                    >
                                      Stock-out
                                    </Button>
                                  </>
                                )}{" "}
                              </h1>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
