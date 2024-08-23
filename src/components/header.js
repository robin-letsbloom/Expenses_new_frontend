import React from "react";
import Img from "/Users/robinsaw/Desktop/frontenet_exp/Expenses_new_frontend copy/src/resources/latest_img.png";

function Header() {
    return (
        <div style={{ width: "100%", height: "auto" }}> {/* 2% of viewport height */}
            <img
                src={Img}
                style={{
                    width: "100%", // Covers the entire width of the browser
                    height: "100%", // Covers 2% of the browser height as set in the div
                    objectFit: "cover", // Ensures the image covers the area without distortion
                }}
                alt="Header"
            />
        </div>
    );
}

export default Header;
