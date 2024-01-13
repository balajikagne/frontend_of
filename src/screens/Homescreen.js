import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menusa from "../components/Menus";
import { getAllitems } from "../actions/MenuActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Row } from "react-bootstrap";
import Filters from "../components/Filters";
import Slidebar from "../components/Slidebar";
import swal from "sweetalert2";
import WarningLine from "../components/WarningLine";
export default function Homescreen() {
  const dispatch = useDispatch();

  const itemstate = useSelector((state) => state.getAllitemsReducer);

  const { items, error, loading } = itemstate;
  
  useEffect(() => {
    dispatch(getAllitems());
  }, []);
  return (
   <div>
   // <WarningLine/>
    <Slidebar/>
    <Filters/>
     <div className="democ">
      {loading ? (
        <Loading/>
      ) : error ? (
        <Error error='We have been working on Testygo app for two days'/>
      ) : (
        items.map((menu) => {
          return (
            <div>
              <div style={{ margin: "-8px" }} >
                <Menusa menu={menu} key={menu._id}/>
              </div>
            </div>
          );
        })
      )}
    </div>
   </div>
  );
}
