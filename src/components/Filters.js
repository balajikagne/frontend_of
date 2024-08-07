import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { filterI, filterItem } from "../actions/MenuActions";
import { useEffect } from "react";
import axios from "axios";
export default function Filters({ onClick }) {
  const dispatch = useDispatch();
  const [searchkey, setsearch] = useState("");
  const [category, setcategory] = useState("");
  const [getdata, setgetdata] = useState([]);
  const [Value, setValue] = useState("");
  useEffect(() => {
    axios
      .get("https://bored-ruby-woolens.cyclic.app/api/items/getallitems")
      .then((res) => {
        setgetdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function onChange(e) {
    setValue(e.target.value);
    
  }
  function onSearch(e) {
    setValue(e);
    dispatch(filterItem(e));
    if (e == "all") {
      setFilter_category("ALL Menus");
    } else {
      setFilter_category(e.toUpperCase());
    }
    onClick()
  }
  function callback(e) {
    // if (searchkey!=='' ||searchkey){
    //   dispatch(filterItem(searchkey.toLowerCase()))
    // }
    // else{
    //   dispatch(filterI(category))
    // }

    setcategory(e.target.value);
    // console.log()
    dispatch(filterI(e.target.value));
    if (e == "all") {
      setFilter_category("ALL Menus");
    } else {
      setFilter_category(e.toUpperCase());
    }
   
  }
  function scall(e) {
    handleLoading();
    setIsLoading(true)
    setcategory(e);
    dispatch(filterI(e));
    if (e == "all") {
      setFilter_category("ALL Menus");
    } else {
      setFilter_category(e.toUpperCase());
    }
    onClick()

  }
  const [Filter_category, setFilter_category] = useState("ALL Menus");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    // Simulate loading for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 5000 milliseconds (5 seconds)

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  };

  // Call the loading function when the component mounts
  handleLoading();
  return (
    <>
      <div style={{ marginBottom: "20px" }} className="p-4 bg-light mt-4 ">
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div className="boxs" style={{ marginTop: "-5px", width: "100%" }}>
            <input
              className="search-size"
              style={{ marginTop: "10px" }}
              value={Value}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder="search"
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" ||
                  e.key === "Search" ||
                  e.key === "Forward" ||
                  e.key === "Next"
                )
                  dispatch(filterItem(Value.toLowerCase()));
              }}
            />
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <Button
                onClick={() => {
                  onSearch(Value.toLowerCase());
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  
                >
                  search
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="dropdow">
          <div className="outer_dropdown">
            {getdata
              .filter((item) => {
                let searchItem = Value.toLowerCase();
                let inames = item.name.toLowerCase();
                return (
                  searchItem &&
                  inames.includes(searchItem) &&
                  searchItem !== inames
                );
              })
              .map((item) => {
                return (
                  <div className="dropdown-rows" key={item._id}>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      
                      onClick={() => {
                        onSearch(item.name.toLowerCase());
                      }}
                    >
                      {item.name}
                    </a>
                  </div>
                );
              })
              .slice(0, 6)}
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginBottom: "40px", marginTop: "100px" }}>
        <div
          className="scrollitems"
          style={{
            display: "flex",
            width: "100%",
            overflow: "scroll",
            overflowY: "hidden",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={(e) => {
              scall("all");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                id="sitem"
              ></img>
              <h2 className="tname">All Menus</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="/notify"
            >
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAIABJREFUeF7snQWYlFUXx/8z272wu3SXNIgSSgmINNISgiBIl3R/CAhIl3S3EgpIqyAgEiIdSkjH7rLdMfM9Z9Zha2be+07szM6e8zw8C8x9b/zuC2fuuScUHsivBgsTYAJMgAkwASaQrQkoWKFn6/3jyTMBJsAEmAAT0BBghc4vAhNgAkyACTABOyDACt0ONpGXwASYABNgAkyAFTq/A0yACTABJsAE7IAAK3Q72EReAhNgAkyACTABVuj8DjABJsAEmAATsAMCrNDtYBN5CUyACTABJsAEWKHzO8AEmAATYAJMwA4IsEK3g03kJTABJsAEmAATYIXO7wATYAJMgAkwATsgwArdDjaRl8AEmAATYAJMgBU6vwNMgAkwASbABOyAACt0O9hEXgITYAJMgAkwAVbo/A4wASbABJgAE7ADAqzQ7WATeQlMgAkwASbABFih8zvABJgAE2ACTMAOCLBCt4NN5CUwASbABJgAE2CFzu8AE2ACTIAJMAE7IMAK3Q42kZfABJgAE2ACTIAVOr8DTIAJMAEmwATsgAArdDvYRF4CE2ACTIAJMAFW6PwOMAEmwASYABOwAwKs0O1gE3kJTIAJMAEmwARYofM7wASYABNgAkzADgiwQreDTeQlMAEmwASYABNghc7vABNgAkyACTABOyDACt0ONpGXwASYABNgAkyAFTq/A0yACTABJsAE7IAAK3Q72EReAhNgAkyACTABVuj8DjABJsAEmAATsAMCrNDtYBN5CUyACTABJsAEWKHzO8AEmAATYAJMwA4IsEK3g03kJTABJsAEmAATYIXO7wATYAJMgAkwATsgwArdDjaRl8AEmAATYAJMgBU6vwNMgAkwASbABOyAACt0O9hEXgITYAJMgAkwAVbo/A4wASbABJgAE7ADAqzQ7WATeQlMgAkwASbABFih8zvABJgAE2ACTMAOCLBCt4NN5CUwASbABJgAE2CFzu8AE2ACTIAJMAE7IMAK3Q42kZfABJgAE2ACTIAVOr8DTIAJMAEmwATsgAArdDvYRF4CE2ACTIAJMAFW6PwOMAEmwASYABOwAwKs0O1gE3kJTIAJMAEmwARYofM7wASYABNgAkzADgiwQreDTeQlMAEmwASYABNg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EiABEiABErAAARp0C2wil0ACJEACJEACNOj8BkiABEiABEjAAgRo0C2wiVwCCZAACZAACdCg8xsgARIgARIgAQsQoEG3wCZyCSRAAiRAAiRAg85vgARIgARIgAQsQIAG3QKbyCWQAAmQAAmQAA06vwESIAESIAESsAABGnQLbCKXQAIkQAIkQAI06PwGSIAESIAESMACBGjQLbCJXAIJkAAJkAAJ0KDzGyABEiABEiABCxCgQbfAJnIJJEACJEACJECDzm+ABEiABEiABCxAgAbdApvIJZAACZAACZAADTq/ARIgARIgARKwAAEadAtsIpdAAiRAAiRAAjTo/AZIgARIgARIwAIEaNAtsIlcAgmQAAmQAAnQoPMbIAESIAESIAELEKBBt8AmcgkkQAIkQAIkQIPOb4AESIAESIAELECABt0Cm8glkAAJkAAJkAANOr8BEiABEiABErAAARp0C2wil0ACJEACJEACNOj8BkiABEiABEjAAgRo0C2wiVwCCZAACZAACdCg8xsgARIgARIgAQsQoEG3wCZyCSRAAiRAAiRAg85vgARIgARIgAQsQIAG3QKbyCWQAAmQAAmQAA06vwESIAESIAESsAABGnQLbCKXQAIkQAIkQAI06PwGSIAESIAESMACBGjQLbCJXAIJkAAJkAAJ0KDzGyABEiABEiABCxCgQbfAJnIJJEACJEACJECDzm+ABEiABEiABCxAgAbdApvIJZAACZAACZAADTq/ARIgARIgARKwAAEadAtsIpdAAiRAAiRAAjTo/AZIgARIgARIwAIEaNAtsIlcAgmQAAmQAAnQoPMbIAESIAESIAELEKBBt8AmcgkkQAIkQAIkQIPOb4AESIAESIAELECABt0Cm8glkAAJkAAJkAANOr8BEiABEiABErAAARp0C2wil0ACJEACJEACNOj8BkiABEiABEjAAgRo0C2wiVwCCZAACZAACdCg8xsgARIgARIgAQsQoEG3wCZyCSRAAiRAAiRAg85vgARIgARIgAQsQIAG3QKbyCWQAAmQAAmQAA06vwESIAESIAESsAABGnQLbCKXQAIkQAIkQAI06PwGSIAESIAESMACBGjQLbCJXAIJkAAJkAAJ0KDzGyABEiABEiABCxCgQbfAJnIJJEACJEACJECDzm+ABEiABEiABCxAgAbdApvIJZAACZAACZAADTq/ARIgARIgARKwAAEadAtsIpdAAiRAAiRAAjTo/AZIgARIgARIwAIEaNAtsIlcAgmQAAmQAAnQoPMbIAESIAESIAELEKBBt8AmcgkkQAIkQAIkQIPOb4AESIAESIAELECABt0Cm8glkAAJkAAJkAANOr8BEiABEiABErAAARp0C2wil0ACJEACJEACNOj8BkiABEiABEjAAgRo0C2wiVwCCZAACZAACdCg8xsgARIgARIgAQsQoEG3wCZyCSRAAiRAAiRAg85vgARIgARIgAQsQIAG3QKbyCWQAAmQAAmQAA06vwESIAESIAESsAABGnQLbCKXQAIkQAIkQAL/B3Tf2qj5vaEEAAAAAElFTkSuQmCC"
                 className="offer_logo"
              ></img>
              <h2 className="tname1">OFFERS</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("veg burger");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
                id="sitem"
              ></img>
              <h2 className="tname">Veg Burger</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("nonveg burger");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg"
                id="sitem"
              ></img>
              <h2 className="tname">N-Veg Burger</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("veg pizza");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1341905556/photo/chinese-food-veg-pizza.jpg?s=612x612&w=0&k=20&c=v8fOYCmKapktf_tzg2wKx1I-sLD8ZyUhnMo1N_AsVEQ="
                id="sitem"
              ></img>
              <h2 className="tname">Veg Pizza</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("nonveg pizza");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/186295807/photo/chicken-tikka-pizza.jpg?s=612x612&w=0&k=20&c=gnF-DKlj1JCCAhzQ4fB8WEyJ_cUlgl1i-ZNsIuvZ54U="
                id="sitem"
              ></img>
              <h2 className="tname">N-Veg Pizza</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("beverages");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img src="logo1.png" id="sitem"></img>
              <h2 className="tname">Beverages</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("cake");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1319549646/photo/happy-birthday-chocolate-cake-with-cherry.jpg?s=612x612&w=0&k=20&c=U6PwDMCH-622xo31ZSXZQJ0ZSJOzQpBb2J45JbiV11I="
                id="sitem"
              ></img>
              <h2 className="tname">Cake</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("veg rice");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1292617507/photo/tasty-veg-schezwan-fried-rice-served-in-bowl-over-a-rustic-wooden-background-indian-cuisine.jpg?s=612x612&w=0&k=20&c=MlfiFWbcPDUj2wnjtxoHBxSUrRrKb9c1OR8rS9H4goc="
                id="sitem"
              ></img>
              <h2 className="tname">Veg Rice</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("nonveg rice");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/644021564/photo/jollof-rice-with-chicken-and-fried-plantain-west-african-cuisine.jpg?s=612x612&w=0&k=20&c=T9QnCp1TPNyxcmD0Qk6FtCjCIs9a6Jpz6EEFCgqouSo="
                id="sitem"
              ></img>
              <h2 className="tname">N-Veg Rice</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("veg sandwich");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/610523442524766208/b8947a2137cb822ff65519ddff5321df.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240129T095330Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=552a4324ff5c63dac748dd3bcd75de843d28d4491cb08c89d8c3e2f1c4e6f62c"
                id="sitem"
              ></img>
              <h2 className="tname">V-Sandwich</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("nonveg sandwich");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1300550738/photo/chicken-sandwiches.jpg?s=612x612&w=0&k=20&c=dHQShf7a7y9nHWJWpRqu3AIuwIAdUg_UWYUts89NYhM="
                id="sitem"
              ></img>
              <h2 className="tname">N-Sandwich</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("starters");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/543179148/photo/spicy-scrambled-eggs-or-egg-bhurji-or-anda-bhurji.webp?b=1&s=170667a&w=0&k=20&c=ZBT3tnUfULyXmOeui7YsZNU60Y8f_Vhi-BG8jLCeYGA="
                id="sitem"
              ></img>
              <h2 className="tname">Starter</h2>
            </a>
          </div>
        </div>
        <div
          className="scrollitems"
          style={{
            display: "flex",
            width: "100%",
            overflow: "scroll",
            overflowY: "hidden",
          }}
        >
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("veg noodles");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1292637257/photo/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-vegetables-served-over-a.jpg?s=612x612&w=0&k=20&c=ckgGtleqsGxEMEW0ZlOR9eM8ii_R3A1apAMo8xa2Cr4="
                id="sitem"
              ></img>
              <h2 className="tname">Veg Noodles</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("nonveg noodles");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1459152165/photo/spicy-chilli-mao-xiang-big-fish-head-with-fish-pork-bean-pork-with-potato-flour-served-dish.jpg?s=612x612&w=0&k=20&c=hGU6PE0Cht0goYeYYy5zxOkfcfvJOrzlrhPFtTO_iAM="
                id="sitem"
              ></img>
              <h2 className="tname">N-Noodles</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("veg roll");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1400256468/photo/mix-vegetable-kathi-roll.jpg?s=612x612&w=0&k=20&c=ZH9fbHJaKkYjzFvl1hTnsl5wdx35pFnBLTKBonBZLw0="
                id="sitem"
              ></img>
              <h2 className="tname">Veg Roll</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("nonveg roll");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1438449132/photo/egg-cheese-chicken-burger-shawarma-wrap-with-salad-dip-and-sauce-isolated-wooden-board-side.jpg?s=612x612&w=0&k=20&c=o34qlfaytv5yfsxdmaWNdU6u524cGl3NXn-X5fjAFdY="
                id="sitem"
              ></img>
              <h2 className="tname">N-Veg Roll</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("nuggets");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1154557976/photo/chicken-nuggets-with-ketchup-popular-american-fast-food-snack-quick-bites-appetizer.jpg?s=612x612&w=0&k=20&c=OElI-vGekjFgmynegkwG-rn3rfrDUEy5IssqnshL0PY="
                id="sitem"
              ></img>
              <h2 className="tname">Nuggets</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("milkshake");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/174956542/photo/non-alcoholic-strawberry-milkshake-cocktail-on-the-classic-black-bar-table.jpg?s=612x612&w=0&k=20&c=WGfVYxkzV3hxsA7C9GHprft39KU5Vn_LYN80rlkCf9I="
                id="sitem"
              ></img>
              <h2 className="tname">Milkshaker</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("maggie");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1292638282/photo/maggie-noodles-instant-noodles-served-in-a-bowl-over-a-rustic-wooden-background-selective.jpg?s=612x612&w=0&k=20&c=7HjVH0Y2HuycpQtjezRdLYKF6BkaEaE_wVO0IqC2uKo="
                id="sitem"
              ></img>
              <h2 className="tname">Maggie</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("coffee");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/867813076/photo/cold-coffee-shake.jpg?s=612x612&w=0&k=20&c=lkdYRGQWogU8ezhdlhAX--z6VW1yEkxeugFJ6q5v-gE="
                id="sitem"
              ></img>
              <h2 className="tname">Coffee</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("fries");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                id="sitem"
              ></img>
              <h2 className="tname">Fries</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("combo pack");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/1196317163/photo/delicious-fresh-and-tasty-flat-bread-italian-pepperoni-or-margherita-pizza-view-of-salami.jpg?s=612x612&w=0&k=20&c=oSm5WTc6nY76Y1QQMiq3BPRs7JAeG7S-mY2qTQ_lW8k="
                id="sitem"
              ></img>
              <h2 className="tname">Combo Pack</h2>
            </a>
          </div>
          <div
            style={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={(e) => {
              scall("soup");
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              
            >
              <img
                src="https://media.istockphoto.com/id/579739258/photo/lemon-coriander-soup.jpg?s=612x612&w=0&k=20&c=816iYZig2GJUKwchjx9i563IZy3c8gemq9uD8N6G9nU="
                id="sitem"
              ></img>
              <h2 className="tname">Soup</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="Filter_category" style={{ marginBottom: "50px" }}>
        <h2>{Filter_category}</h2>
      </div>
      <div style={{marginTop:'-40px'}}>
      {isLoading ? (
        <div>
          <p>Loading...</p>
          {/* You can replace this with your preferred loading spinner or animation */}
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {/* Content to display after loading */}
          <p>Data loaded successfully!</p>
        </div>
      )}
    </div>
    </>
  );
}
