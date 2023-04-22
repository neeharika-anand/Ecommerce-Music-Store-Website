import React from "react";
const mystyle={
  color:'#f3f3f3'
}

export default function Title({ name, category }) {
  return (
    <div className="text-center pt-4">
      <h1 style={mystyle} className="text-capitalize font-weight-bold">
        {name} <span style={{color:'#cd873c'}} > {category}</span>
      </h1>
    </div>
  );
}
