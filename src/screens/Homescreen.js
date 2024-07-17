import React, { useEffect ,useState,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import Menusa from "../components/Menus";
import { getAllitems } from "../actions/MenuActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Row } from "react-bootstrap";
import Filters from "../components/Filters";
import Slidebar from "../components/Slidebar";
import swal from "sweetalert2";
import Menus from "../Menu";

export default function Homescreen() {
  const dispatch = useDispatch();
  const itemstate = useSelector((state) => state.getAllitemsReducer);
  const { error, loading } = itemstate;

  useEffect(() => {
    dispatch(getAllitems());
  }, []);
  const section2Ref = useRef(null);

  const filterButtonClick = () => {
    // Ensure that section2Ref.current is not null before calling scrollIntoView
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({
        top: 400, // Adjust this value based on how much you want the container to scroll vertically
        behavior: 'smooth', // Optional: Add smooth scrolling effect
      });
    }
  };
  console.log(Menus)
  return (
    <div>
      <Slidebar />
      <Filters onClick={filterButtonClick}/>
      
      <div className="democ" ref={section2Ref}>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="We have been working on Testygo app for two days" />
        ) : (
          
          Menus
            .slice()
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
                <Menusa menu={menu} sectionRef={section2Ref}/>
              </div>
            ))
        )}
      </div>
    </div>
  );
}
