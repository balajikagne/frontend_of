import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import swal from "sweetalert2";
export default function Menus({ menu }) {
  const [varient, setVarient] = useState("half");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addtocart() {
    if (menu.stock === false) {
      swal.fire({
        title: "This item is out of stock",
        text: "Thank You",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      dispatch(addToCart(menu, quantity, varient, menu.country));
    }
    // console.log()
  }
  return (
    <div
      className="shadow p-2 bg-white rounded childc"
      style={{ width: "280px" }}
    >
      <section id="itemloc">
        <div onClick={handleShow}>
          <h1>
            {menu.stock === true ? (
              <>
                <h6 className="text-success">Available</h6>
              </>
            ) : (
              <>
                <h6 style={{ color: "red" }}>Unavailable</h6>
              </>
            )}{" "}
          </h1>
          <h1>
            <b>{menu.name}</b>
          </h1>
          <img
            src={menu.img}
            className="img-fluid"
            style={{ height: "90px", width: "180px" }}
          ></img>
        </div>
        <div className="flex-container">
          <div className="w-100 m-1">
            <p>Varients:</p>
            <select
              className="form-control"
              value={varient}
              onChange={(e) => {
                setVarient(e.target.value);
              }}
              style={{ marginTop: "-20px" }}
            >
              {menu.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div className="w-100 m-1">
            <p>Quantity:</p>
            <select
              className="form-control"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              style={{ marginTop: "-20px" }}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex-container">
          <div className="m-1 w-100">
            <h2 className="pbtn">
              Price: {menu.prices[0][varient] * quantity} Rs
            </h2>
            <h2 className="pbtn">
              Free Delivery+Discount :
              <span style={{ textDecoration: "line-through" }}>
                {menu.rate}
              </span>
            </h2>
            <div className="w-100">
              <button className="btn" onClick={addtocart}>
                Add
              </button>
            </div>
          </div>
        </div>

        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>{menu.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img
              src={menu.img}
              style={{ height: "200px", width: "300px" }}
            ></img>
            <p>{menu.dsc}</p>
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </section>
    </div>
  );
}
