import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';

function Scratchcard({prizeValue}) {
 
    useEffect(() => {
        const canvasElement = document.getElementById("scratch");
        const canvasContext = canvasElement.getContext("2d");
 
        const initializeCanvas = () => {
            const gradient = canvasContext
                .createLinearGradient(0, 0, 135, 135);
            gradient.addColorStop(0, "#d63031");
            gradient.addColorStop(1, "#fdcb6e");
            canvasContext.fillStyle = gradient;
            canvasContext.fillRect(0, 0, 200, 200);
 
            // Generate a random prize value
            //from the available options
            
        };
 
        let mouseX = 0;
        let mouseY = 0;
        let isDragging = false;
 
        const eventTypes = {
            mouse: {
                down: "mousedown",
                move: "mousemove",
                up: "mouseup"
            },
            touch: {
                down: "touchstart",
                move: "touchmove",
                up: "touchend"
            }
        };
 
        let deviceType = "";
 
        const checkIfTouchDevice = () => {
            try {
                document.createEvent("TouchEvent");
                deviceType = "touch";
                return true;
            } catch (e) {
                deviceType = "mouse";
                return false;
            }
        };
 
        const getMouseCoordinates = (event) => {
            mouseX =
                (!checkIfTouchDevice() ? event.pageX :
                 event.touches[0].pageX) -
                canvasElement.getBoundingClientRect().left;
            mouseY =
                (!checkIfTouchDevice() ? event.pageY :
                 event.touches[0].pageY) -
                canvasElement.getBoundingClientRect().top;
        };
 
        checkIfTouchDevice();
 
        canvasElement.addEventListener(eventTypes[deviceType]
            .down, (event) => {
            isDragging = true;
            getMouseCoordinates(event);
            scratch(mouseX, mouseY);
        });
 
        canvasElement.addEventListener(eventTypes[deviceType]
            .move, (event) => {
            if (!checkIfTouchDevice()) {
                event.preventDefault();
            }
            if (isDragging) {
                getMouseCoordinates(event);
                scratch(mouseX, mouseY);
            }
        });
 
        canvasElement.addEventListener(eventTypes[deviceType]
            .up, () => {
            isDragging = false;
        });
 
        canvasElement.addEventListener("mouseleave", () => {
            isDragging = false;
        });
 
        const scratch = (x, y) => {
            canvasContext
            .globalCompositeOperation = "destination-out";
            canvasContext.beginPath();
            canvasContext.arc(x, y, 12, 0, 2 * Math.PI);
            canvasContext.fill();
        };
 
        initializeCanvas();
    }, []);
  return (
    <div>
        <div>
            <h2>YOU GOT SCRATCHCARD</h2>
        </div>
       <div className="container">
            <div className="base">
                <h4>You got order</h4>
                 <h4>At</h4>
                <h3>{prizeValue} Rs</h3>
            </div>
            <canvas
                id="scratch"
                width="200"
                height="200"
                style={{
                    cursor:
'url("https://media.geeksforgeeks.org/wp-content/uploads/20231030101751/bx-eraser-icon.png"), auto'
                }}
            ></canvas>
        </div>
             <div>
        <NavLink  to="/orders" style={{color:'black',textDecoration:'none'}}><button className="btn mt-3">My Orders</button></NavLink>
        </div>
    </div>
  )
}

export default Scratchcard
