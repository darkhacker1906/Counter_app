import React from "react";


function Button(props) {
  console.log(props);
  return (
    <div>
      <button
        style={{
          borderRadius: 35,
          backgroundColor: "#21b6ae",
          padding: "10px",
          fontSize: "18px",
          margin: "10px",
          filter:`${props.count==0?'blur(1px)':''}`
        }}
        disabled={props.count == 0 }
        onClick={props.handleClick}
      >
        {props.title}
      </button>
    </div>
  );
}
export default Button;
