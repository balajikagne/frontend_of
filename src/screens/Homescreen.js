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

export default function Homescreen() {
  const dispatch = useDispatch();
  const itemstate = useSelector((state) => state.getAllitemsReducer);
  const { items, error, loading } = itemstate;

  useEffect(() => {
    dispatch(getAllitems());
  },[]);

  return (
    <div>
      <Slidebar />
      <Filters />
      <div className="democ">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Check Internet Connection" />
        ) : (
          items
            .sort((a, b) => {
              console.log(a.country);
            
              // First, sort by availability and country (onlineAvailable)
              if (a.country === 'nilesh' && a.stock && (b.country !== 'nilesh' || !b.stock)) {
                return -1; // 'a' is available and 'nilesh', 'b' is not 'nilesh' or not available, so 'a' comes first
              } else if (a.stock && a.country !== 'nilesh' && (!b.country || !b.stock)) {
                return -1; // 'a' is available and not 'nilesh', 'b' is not available or not 'nilesh', so 'a' comes first
              } else if ((!a.stock || !b.country) && (b.stock && b.country !== 'nilesh')) {
                return 1; // 'a' is not available or not 'nilesh', 'b' is available and not 'nilesh', so 'b' comes first
              } else if ((!a.country || !a.stock) && (!b.country || !b.stock)) {
                return 1; // 'a' is not available or not 'nilesh', 'b' is not available or not 'nilesh', so 'b' comes first
              }
            
              // Within each group, sort by updatedAt in descending order
              // return new Date(b.updatedAt) - new Date(a.updatedAt);
            })
            .map((menu) => (
              <div key={menu._id} style={{ margin: "-4px" }}>
                <Menusa menu={menu} />
              </div>
            ))
        )}
      </div>
    </div>
  );
}
