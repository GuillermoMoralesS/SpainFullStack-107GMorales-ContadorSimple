import React from "react";


const Counter = ({seconds}) => {
    return (
        <div className="d-flex bg-dark px-4" style={{ fontSize: "8rem", letterSpacing: "2rem" }}>{seconds}</div>
    );
};

export default Counter;