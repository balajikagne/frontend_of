import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menusa from "../components/Menus";
import { getAllitems } from "../actions/MenuActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Row } from "react-bootstrap";
import Filters from "../components/Filters";
import Slidebar from "../components/Slidebar";

export default function Homescreen() {
  const dispatch = useDispatch();

  const itemstate = useSelector((state) => state.getAllitemsReducer);

  const { items, error, loading } = itemstate;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null) {
      window.location.href = "/";
    }
  }, []);
  useEffect(() => {
    dispatch(getAllitems());
  }, []);
  return (
   <div>
    <Slidebar/>
    <Filters/>
     <div className="democ">
      {loading ? (
        <Loading/>
      ) : error ? (
        <Error error='something went wrong'/>
      ) : (
        items.map((menu) => {
          return (
            <div>
              <div style={{ margin: "-8px" }} key={menu._id}>
                <Menusa menu={menu} />
              </div>
            </div>
          );
        })
      )}
    </div>
   </div>
  );
}
