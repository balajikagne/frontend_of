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
  }, []);

  return (
    <div>
      <Slidebar />
      <Filters />
      <div className="democ">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="We have been working on Testygo app for two days" />
        ) : (
          items
            .slice()
            .sort((a, b) => {
              // First, sort by availability (onlineAvailable)
              if (a.stock && !b.stock) {
                return -1 && a.prices[0].full - b.prices[0].full; // 'a' is available, 'b' is not, so 'a' comes first
              } else if (!a.stock && b.stock) {
                return 1 && a.prices[0].full - b.prices[0].full; // 'a' is not available, 'b' is, so 'b' comes first
              }

              // Within each group, sort by updatedAt in descending order
              return (new Date(b.updatedAt) - new Date(a.updatedAt)) && (a.prices[0].full - b.prices[0].full);
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
